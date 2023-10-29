'use client'
import React from 'react'
import styles from '@/styles/ShareBtn.module.scss'
import {
	FacebookShareButton,
	FacebookIcon,
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
	RedditShareButton,
	RedditIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
	TelegramShareButton,
	TelegramIcon,
	LinkedinShareButton,
	LinkedinIcon,
  } from 'next-share'
import { roboto500 } from '@/app/fonts'
import { usePathname } from 'next/navigation'
import { BiShareAlt } from "react-icons/bi";

function ShareBtn() {
	const pathname = usePathname()
	return (
	<div className={styles.shareBtnContainer}>
		<h3 className={`${styles.shareH3} ${roboto500.className}`}>
			Share <BiShareAlt style={{position:'relative', top: '2px'}} />:
		</h3>
		<div className={styles.shareButtons}>
			<FacebookShareButton
				url={`https://montoya-trading-next.vercel.app${pathname}`}
			>
				<FacebookIcon size={18} round />
			</FacebookShareButton>
			<FacebookMessengerShareButton
				url={`https://montoya-trading-next.vercel.app${pathname}`}
				// requires Facebook Application ID
				appId={'305375775631555'}
			>
				<FacebookMessengerIcon size={18} round />
			</FacebookMessengerShareButton>
			<RedditShareButton
				url={`https://montoya-trading-next.vercel.app${pathname}`}
			>
				<RedditIcon size={18} round />
			</RedditShareButton>
			<TwitterShareButton
				url={`https://montoya-trading-next.vercel.app${pathname}`}
			>
				<TwitterIcon size={18} round />
			</TwitterShareButton>
			<WhatsappShareButton
				url={`https://montoya-trading-next.vercel.app${pathname}`}
			>
				<WhatsappIcon size={18} round />
			</WhatsappShareButton>
			<TelegramShareButton
				url={`https://montoya-trading-next.vercel.app${pathname}`}
			>
				<TelegramIcon size={18} round />
			</TelegramShareButton>
			<LinkedinShareButton
				url={`https://montoya-trading-next.vercel.app${pathname}`}
			>
				<LinkedinIcon size={18} round />
			</LinkedinShareButton>
		</div>
	</div>
	)
}

export default ShareBtn