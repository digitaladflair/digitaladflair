import { TService } from "@/constants/services.const";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  service: TService;
  index: number;
  isReversed?: boolean;
}

const ServiceCard = ({
  service,
  index,
  isReversed = false,
}: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1.2,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative p-6 rounded-2xl"
    >
      <div
        className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isReversed ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Image Section */}
        <motion.div
          className="flex-1 relative"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="size-[250px] md:size-[320px] relative mx-auto rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`${service.iconBgColor} p-3 rounded-lg`}>
              <Icon className={`size-6 sm:size-8 ${service.iconColor}`} />
            </div>
            <h3 className="text-xl md:text-3xl font-semibold">
              {service.title}
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg"
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
            viewport={{ once: true }}
          >
            {service.description}
          </motion.p>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, featureIndex) => {
                return (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div
                      className={cn(
                        "size-3 rounded-full mr-3 flex-shrink-0",
                        service.bgColor
                      )}
                    ></div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      {feature}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Button
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              Learn More
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
