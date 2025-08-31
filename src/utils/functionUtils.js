
export function validateFormSendingEmail(username, email, message) {
   let name_trimmed = username.trim();
   let email_trimmed = email.trim();
   let message_trimmed = message.trim();

   const name_pattern = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)(,? (?:[JS]r\.?|II|III|IV))?$/g;
   const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;

   if (name_trimmed.length === 0) {
      return {isValid: false, error: 'Your first and last name are required!'};
   }
   if (!name_trimmed.match(name_pattern)) {
      return {isValid: false, error: 'Enter your first and last name!'};
   }
   if (email_trimmed.length === 0) {
      return {isValid: false, error: 'Your email is required!'};
   }
   if (!email_trimmed.match(email_pattern)) {
      return {isValid: false, error: 'Enter a valid email!'};
   }
   if (message_trimmed.length === 0) {
      return {isValid: false, error: 'Your message is required!'};
   }
   if (message_trimmed.length < 30) {
      return {isValid: false, error: 'Your message must be at least 30 characters!'};
   }
   return {isValid: true};
}