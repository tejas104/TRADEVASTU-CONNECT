import { motion } from "framer-motion";

export function GoogleMaps() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full rounded-lg overflow-hidden border border-gold/10 shadow-gold"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.823286514147!2d72.84872!3d19.076063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ca6d5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704067200000"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[400px]"
      />
    </motion.div>
  );
}
