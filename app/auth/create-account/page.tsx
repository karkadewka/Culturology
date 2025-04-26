"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function CreateAccountPage() {
  const router = useRouter()

  return (
    <div className="app-container">
      <div className="onboarding-screen">
        <div className="heritage-logo mt-8">
          <div className="heritage-logo-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        <h1 className="text-xl font-bold text-[#d2a24c] text-center mt-4">CREATE ACCOUNT</h1>

        <div className="auth-form">
          <div>
            <label className="text-sm text-heritage-primary">Email or Phone</label>
            <Input className="mt-1 bg-white" placeholder="Enter your email or phone" />
          </div>

          <div>
            <label className="text-sm text-heritage-primary">Date of Birth</label>
            <Input className="mt-1 bg-white" type="date" />
          </div>

          <div>
            <label className="text-sm text-heritage-primary">Password</label>
            <Input className="mt-1 bg-white" type="password" placeholder="Enter your password" />
          </div>

          <div>
            <label className="text-sm text-heritage-primary">Confirm Password</label>
            <Input className="mt-1 bg-white" type="password" placeholder="Confirm your password" />
          </div>

          <Button
            onClick={() => router.push("/auth/verification")}
            className="bg-[#b96936] hover:bg-[#a95926] text-white w-full mt-4"
          >
            SEND CODE
          </Button>

          <div className="text-center text-xs text-heritage-primary mt-2">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#d2a24c]">
              Login now
            </Link>
          </div>
        </div>

        <div className="social-login mt-4">
          <button className="social-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://techno.bigmir.net/i/59/11/19/1/5911191/7d82a0acc0d5dbda6957c9ea601bcfca-quality_75Xresize_crop_1Xallow_enlarge_0Xw_740Xh_400.jpg">
              <path
                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                fill="#4285F4"
              />
            </svg>
          </button>

          <button className="social-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://techno.bigmir.net/i/59/11/19/1/5911191/7d82a0acc0d5dbda6957c9ea601bcfca-quality_75Xresize_crop_1Xallow_enlarge_0Xw_740Xh_400.jpg">
              <path
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                fill="#3c5a99"
              />
            </svg>
          </button>
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
