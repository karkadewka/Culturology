"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function VerificationPage() {
  const router = useRouter()

  return (
    <div className="app-container">
      <div className="onboarding-screen">
        <div className="heritage-logo mt-8">
          <div className="heritage-logo-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="https://techno.bigmir.net/i/59/11/19/1/5911191/7d82a0acc0d5dbda6957c9ea601bcfca-quality_75Xresize_crop_1Xallow_enlarge_0Xw_740Xh_400.jpg">
              <path
                d="M40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10Z"
                stroke="#6f5643"
                strokeWidth="2"
              />
              <path
                d="M25 30C25 27.2386 27.2386 25 30 25H50C52.7614 25 55 27.2386 55 30V50C55 52.7614 52.7614 55 50 55H30C27.2386 55 25 52.7614 25 50V30Z"
                fill="#6f5643"
              />
              <text x="40" y="45" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="bold">
                H
              </text>
              <path
                d="M15 15C15 12.2386 17.2386 10 20 10H60C62.7614 10 65 12.2386 65 15V65C65 67.7614 62.7614 70 60 70H20C17.2386 70 15 67.7614 15 65V15Z"
                stroke="#6f5643"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M20 20C20 17.2386 22.2386 15 25 15H55C57.7614 15 60 17.2386 60 20V60C60 62.7614 57.7614 65 55 65H25C22.2386 65 20 62.7614 20 60V20Z"
                stroke="#6f5643"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-xl font-bold text-[#d2a24c] text-center mt-4">VERIFICATION CODE</h1>
        <p className="text-sm text-center text-heritage-primary mt-2">Please enter the code sent to your email</p>

        <div className="verification-code">
          <div className="code-input">8</div>
          <div className="code-input">6</div>
          <div className="code-input">0</div>
          <div className="code-input">7</div>
        </div>

        <Button onClick={() => router.push("/home")} className="bg-[#b96936] hover:bg-[#a95926] text-white w-full mt-8">
          SUBMIT
        </Button>

        <div className="text-center text-xs text-heritage-primary mt-4">
          Didn't receive code?{" "}
          <Link href="#" className="text-[#d2a24c]">
            Resend code
          </Link>
        </div>

        <div className="monument-silhouette mt-auto">
          <Image
            src="https://techno.bigmir.net/i/59/11/19/1/5911191/7d82a0acc0d5dbda6957c9ea601bcfca-quality_75Xresize_crop_1Xallow_enlarge_0Xw_740Xh_400.jpg"
            alt="Monument silhouette"
            width={390}
            height={80}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
