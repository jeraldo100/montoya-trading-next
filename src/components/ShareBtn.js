'use client'
import React from 'react'
import styles from '@/styles/ShareBtn.module.scss'
import {
	FacebookShareButton,
	FacebookIcon,
  } from 'next-share'
import { usePathname } from 'next/navigation'
import { BiShareAlt } from "react-icons/bi";

function ShareBtn() {
	const pathname = usePathname()
  	return (
	<>
		<FacebookShareButton
			url={pathname}
		>
			<FacebookIcon size={32} round />
		</FacebookShareButton>
	</>
  	)
}

export default ShareBtn