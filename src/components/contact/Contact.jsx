import "./contact.css";
import emailjs from '@emailjs/browser';
// import { span } from "motion/react-client";
import { useRef, useState } from 'react';
//import { useInView } from 'motion/react';
import ContactSvg from "./ContactSvg";
import { motion } from "motion/react";










// const Contact = () => {
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState(false);

//     const form = useRef();
//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_SERVICE_ID, 
//         import.meta.env.VITE_TEMPLATE_ID, 
//         form.current, {
//         publicKey: import.meta.env.VITE_PUBLIC_KEY,
//       })
//       .then(
//         () => {
//             setSuccess(true);
//             setError(false);
//         },
//         (error) => {
//             setError(true);
//             setSuccess(false);
//         },
//       );
//   };
//     return (
//         <div className="contact" >

//             <div className="cSection">
//                 <form ref={form} onSubmit={sendEmail}>
//                     <div className="cTitle">My inbox is Lonely</div>

//                     <div className="formItem">
//                         <label>Name</label>
//                         <input type="text" name="username" placeholder="Yaa Baby" />
//                     </div>

//                     <div className="formItem">
//                         <label>Email</label>
//                         <input type="email" name="user_email " placeholder="yaababy@anymail.com" />
//                     </div>

//                     <div className="formItem">
//                         <label>Message</label>
//                         <textarea rows={10} name="user_message" placeholder="Write your message Here..."></textarea> 
//                     </div>

//                     <button className="formButton">Send</button>
//                     {success && <span>Message Sent!</span>}
//                     {error && <span>Something went Wrong!</span>}
                    


//                 </form>
//             </div>
//             {/*the right section */}
//             <div className="cSection">SVG</div>
 
//         </div>
        
//     )
// }

// export default Contact;



// ── Validation rules ──────────────────────────────────────────────────────────
const RULES = {
  username: {
    required: true,
    minLength: 2,
    maxLength: 60,
    pattern: /^[a-zA-Z\s'-]+$/,
    messages: {
      required: "Name is required.",
      minLength: "Name must be at least 2 characters.",
      maxLength: "Name must be under 60 characters.",
      pattern: "Name can only contain letters, spaces, hyphens, and apostrophes.",
    },
  },
  user_email: {
    required: true,
    maxLength: 254,                                  // RFC 5321 limit
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    messages: {
      required: "Email is required.",
      maxLength: "Email address is too long.",
      pattern: "Please enter a valid email address.",
    },
  },
  user_message: {
    required: true,
    minLength: 10,
    maxLength: 2000,
    messages: {
      required: "Message is required.",
      minLength: "Message must be at least 10 characters.",
      maxLength: "Message cannot exceed 2,000 characters.",
    },
  },
};

// ── Rate-limit guard (client-side, pairs with server-side) ────────────────────
const SUBMIT_COOLDOWN_MS = 60_000; // 1 minute between submissions
let lastSubmitTime = 0;

function validateField(name, value) {
  const rule = RULES[name];
  if (!rule) return null;

  const v = value.trim();

  if (rule.required && !v) return rule.messages.required;
  if (rule.minLength && v.length < rule.minLength) return rule.messages.minLength;
  if (rule.maxLength && v.length > rule.maxLength) return rule.messages.maxLength;
  if (rule.pattern && !rule.pattern.test(v)) return rule.messages.pattern;

  return null;
}

function sanitize(value) {
  // Strip leading/trailing whitespace; collapse internal whitespace runs
  return value.trim().replace(/\s+/g, " ");
}

// ── Component ─────────────────────────────────────────────────────────────────
const Contact = () => {
  const [fields, setFields] = useState({
    username: "",
    user_email: "",
    user_message: "",
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const form = useRef();


  // ── Helpers ──────────────────────────────────────────────────────────────────
  const validateAll = (data) => {
    const errs = {};
    Object.keys(RULES).forEach((name) => {
      const msg = validateField(name, data[name] ?? "");
      if (msg) errs[name] = msg;
    });
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));

    // Live validation only after the field has been touched
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  // ── Submit ───────────────────────────────────────────────────────────────────
  const sendEmail = (e) => {
    e.preventDefault();

    // Mark all fields as touched so errors surface
    setTouched({ username: true, user_email: true, user_message: true });

    // Client-side rate limit
    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_COOLDOWN_MS) {
      alert("✗ Please wait a moment before sending another message.");
      return;
    }

    // Full validation pass
    const errs = validateAll(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Sanitize before sending
    const sanitized = {
      username: sanitize(fields.username),
      user_email: sanitize(fields.user_email),
      user_message: sanitize(fields.user_message),
    };

    // Inject sanitized values into the hidden form inputs before emailjs reads them
    Object.entries(sanitized).forEach(([key, val]) => {
      const el = form.current.elements[key];
      if (el) el.value = val;
    });

    setSubmitting(true);
    lastSubmitTime = now;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => {
          alert("✓ Message sent!");
          setFields({ username: "", user_email: "", user_message: "" });
          setTouched({});
          setErrors({});
        },
        () => {
          alert("✗ Something went wrong. Please try again.");
        }
      )
      .finally(() => setSubmitting(false));
  };

  // Character-count helper for textarea
//   const msgLen = fields.user_message.length;
  const msgMax = RULES.user_message.maxLength;


  
//const isInView = useInView(form, {margin: "-200px"});


  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="contact">
      <div className="cSection">
        <form  ref={form} onSubmit={sendEmail} noValidate>
          <h1  className="cTitle">My Inbox is Lonely</h1>

                        {/* Name */}
            <div className="formItem">
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder={errors.username && touched.username ? errors.username : "Yaa Baby"}
                    value={fields.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={RULES.username.maxLength}
                    autoComplete="name"
                    aria-invalid={!!errors.username}
                />
            </div>

                {/* Email */}
            <div className="formItem">
                <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder={errors.user_email && touched.user_email ? errors.user_email : "yaababy@anymail.com"}
                    value={fields.user_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={RULES.user_email.maxLength}
                    autoComplete="email"
                    aria-invalid={!!errors.user_email}
                />
            </div>

                {/* Message */}
            <div className="formItem">
                <textarea
                    id="user_message"
                    rows={10}
                    name="user_message"
                    placeholder={errors.user_message && touched.user_message ? errors.user_message : "Write your message here..."}
                    value={fields.user_message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={msgMax}
                    aria-invalid={!!errors.user_message}
                />
            </div>
                        <button className="formButton" disabled={submitting} type="submit">
                            {submitting ? "Sending…" : "Send"}
                        </button>

                    <div className="socialMediaHandles">
                    <motion.a  href="https://www.linkedin.com/in/wiabo-amos76" target="_blank" rel="noreferrer">
                        <img src="/linkedin.png" alt="linkedin" />
                    </motion.a>

                    <motion.a  href="https://www.x.com/KwesiMute" target="_blank" rel="noreferrer" >
                        <img src="/twitter.png" alt="twitter" />
                    </motion.a>

                    <motion.a  href="https://wa.me/233240552533" target="_blank" rel="noreferrer">
                        <img src="/whatsapp.png" alt="whatsapp" />
                    </motion.a>

                     <motion.a  href="https://github.com/M-ute" target="_blank" rel="noreferrer">
                        <img src="/github.png" alt="github" />
                    </motion.a>
        </div>
        </form>

        
    </div> 

        

                {/* right section */}
                <div className="cSection">

                    <ContactSvg />

                </div>
    </div>
  );
};

export default Contact;