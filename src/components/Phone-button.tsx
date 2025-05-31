import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PhoneButtonProps {
  phoneNumber?: string
}

export function PhoneButton({ phoneNumber = "+27 21 531 0913" }: PhoneButtonProps) {
  // Clean the phone number (remove spaces, brackets, etc.)
  const cleanNumber = phoneNumber.replace(/\s+/g, "").replace(/[$$$$-]/g, "")
  const phoneUrl = `tel:${cleanNumber}`

  // Format phone number for display
  const formattedNumber = phoneNumber.startsWith("+") ? phoneNumber : `+${phoneNumber}`

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.a
            href={phoneUrl}
            className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full transition-transform duration-300 hover:scale-110"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Call us">       
            <div className="relative bg-primary p-3.5 rounded-full">
              {/* Pulse animation */}
              <span className="absolute -inset-1 rounded-full animate-ping bg-primary/30" />
              <Phone className="w-7 h-7 text-white" />
            </div>
          </motion.a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-primary text-white border-primary">
          <p>Call us now</p>
          <p className="text-sm font-medium">{formattedNumber}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default PhoneButton
