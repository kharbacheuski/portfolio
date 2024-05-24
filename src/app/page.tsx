"use client";

import "./page.styles.scss";
import { Fragment, useEffect } from "react";
import { mono, mulish } from "@/utils/fonts";
import {loadClassName} from "@/utils/animation";

export default function Home() {

	useEffect(() => {
		loadClassName()
	}, [])

	return (<Fragment>
			<section id="about" className="preview">
				<div className="container">
					<div className="preview_inner">
						<div className="preview_grid">
							<div className="preview_image">
								<img src="/kiryl-harbacheuski.png" alt="Kiryl Harbacheuski" id="preview-photo" className="preview-photo" />
								<label htmlFor="preview-photo">Kiryl Harbacheuski</label>
							</div>
							
							<div className="preview_content">
								<div className="preview-title">
									<h1>
										<span className="line uppercase" data-animate-top style={{transitionDelay: '0.1s'}}>frontend</span>
										<span className="line uppercase" data-animate-right style={{transitionDelay: '0.3s'}}>developer</span>
										<span className="location" data-animate-right style={{transitionDelay: '1s'}}>Minsk, Belarus</span>
									</h1>
								</div>
							</div>
						</div>

						<div className={`preview-description`}>
							<p data-animate-right style={{transitionDelay: '0.7s'}}>I'am from Minsk. I have 3 years of commercial experience.</p>
							<p data-animate-left style={{transitionDelay: '1.2s'}}>I love making beautiful things, learning new modern technologies and developing in the IT field.</p>
						</div>
					</div>
				</div>
			</section>

			<section id="past" className="past">
				<div className="past_inner">
					<div className="past_item dark">
						<h3 className={mulish.className}>Education</h3>
						<p>Belarusian State University of Informatics and Radioelectronics</p>
						<span>(КСиС/ВМСиС 2021 - 2025)</span>
					</div>
					<div className="past_item">
						<h3 className={mulish.className}>Job</h3>
						<p>Finmarket Soft</p>
						<span>(fulltime since jan 2022)</span>
					</div>
				</div>
			</section>

			<section id="stack" className="stack">
				<div className="container">
					<div className="stack_inner">
						<h2 data-animate-left>
							I have extensive experience in client side development using a variety of technologies:
						</h2>

						<ul className={`stack-list ${mono.className}`}>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.1s'}}>React</li>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.15s'}}>Typescript / JavaScript</li>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.2s'}}>Next.js</li>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.25s'}}>CSS(SCSS)</li>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.3s'}}>Redux</li>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.35s'}}>Mobx</li>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.4s'}}>Webpack</li>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.45s'}}>Vite</li>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.50s'}}>Material UI</li>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.55s'}}>Ghost CMS</li>
							<li data-animate-top data-animate-scale style={{transitionDelay: '0.6s'}}>Docker</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="experience">
				<div className="container">
					<div className="experience_inner">
						<p>
							I create both <span className={`uppercase`}>
								landing pages
							</span> and <span className={`uppercase`}>
								large applications
							</span> with a lot of logic and states
						</p>
					</div>
				</div>
			</section>

			<section id="contacts" className="contacts">
				<div className="container">
					<div className="contacts_inner">
						<h2 data-animate-left style={{transitionDelay: '0.0s'}}>
							Do you want to contact me?
						</h2>

						<ul className="contacts_list">
							<li data-animate style={{transitionDelay: '0.1s'}}>
								<a href="https://github.com/kharbacheuski/" target="_blank" rel="noreferrer" className="contacts-link">
									Github
								</a>
							</li>
							<li data-animate style={{transitionDelay: '0.2s'}}>
								<a href="https://www.linkedin.com/in/kiryl-harbacheuski-293b42243/" target="_blank" rel="noreferrer" className="contacts-link">
									Linkedin
								</a>
							</li>
							<li data-animate style={{transitionDelay: '0.3s'}}>
								<a href="https://t.me/KirylHarbacheuski/" target="_blank" rel="noreferrer" className="contacts-link">
									Telegram
								</a>
							</li>
							<li data-animate style={{transitionDelay: '0.4s'}}>
								<a href="mailto:k.harbacheuski@gmail.com" target="_blank" rel="noreferrer" className="contacts-link">
									k.harbacheuski@gmail.com
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</Fragment>
	);
}
