"use client";

import "./page.styles.scss";
import { Fragment, useEffect } from "react";
import {mulish } from "@/utils/fonts";
import {loadClassName, chaosLogos} from "@/utils/animation";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Scrollbar} from 'swiper/modules';

import 'swiper/css';;
import 'swiper/css/scrollbar';

export default function Home() {

	useEffect(() => {
		loadClassName()
		chaosLogos()
	}, [])

	return (<Fragment>
			<section id="about" className="preview">
				<div className="container xl">
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
										<span className="line uppercase" data-animate-right style={{transitionDelay: '0.3s'}}><span className="uppercase inner">dev</span>eloper</span>
										<span className="location" data-animate-right style={{transitionDelay: '1s'}}>Minsk, Belarus</span>
									</h1>
								</div>
							</div>
						</div>

						<div className={`preview-description`}>
							<p data-animate-right style={{transitionDelay: '0.7s'}}>React developer with 4 years of commercial experience.</p>
							<p data-animate-left style={{transitionDelay: '1.2s'}}>My love is making beautiful things and enjoying the results.</p>
						</div>
					</div>
				</div>
			</section>

			<section id="stack" className="past">
				<div className="past_inner">
					<Swiper
						direction="horizontal"
						spaceBetween={0}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
						modules={[Scrollbar]}
						scrollbar={{ draggable: false }}
						breakpoints={{
							1200: {
								slidesPerView: 2.5,
							},
							768: {
								slidesPerView: 1.8,
							},
							350: {
							  slidesPerView: 1.2,
							},
						}}
					>
						<SwiperSlide className="past_item tech-stack">
							<h3 className={mulish.className}>Stack</h3>
							<ul className={`list `}>
								<li data-animate-top data-animate-scale style={{transitionDelay: '0.1s'}}>React</li>
								<li data-animate-top data-animate-scale style={{transitionDelay: '0.15s'}}>Typescript</li>
								<li data-animate-top data-animate-scale style={{transitionDelay: '0.15s'}}>JavaScript</li>
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
						</SwiperSlide>
						<SwiperSlide className="past_item job">
							<h3 className={mulish.className}>Job</h3>

							<div className="past_item-block">
								<p>
									<a target="_blank" href="https://www.linkedin.com/company/finmarketsoft-people/">Finmarket Soft</a>
								</p>
								<span>(fulltime since jan 2022)</span>
							</div>

							<div className="past_item-block">
								<p className="green">
									<a target="_blank" href="https://biggiko.com/">Biggiko</a>
								</p>
								<span>(part-time since aug 2023 - mar 2024)</span>
							</div>
						</SwiperSlide>
						<SwiperSlide className="past_item education">
							<h3 className={mulish.className}>Education</h3>

							<div className="past_item-block">
								<p>
									<a target="_blank" href="https://www.bsuir.by/">Belarusian State University of Informatics and Radioelectronics</a>
								</p>
								<span>(КСиС/ВМСиС 2021 - 2025)</span>
							</div>
						</SwiperSlide>
						<SwiperSlide className="past_item hobbie">
							<h3 className={mulish.className}>Hobby</h3>

							<div className="past_item-block">
								<p>Music / Films / Books</p>
								<a className="link-with-logo" target="_blank" href="https://open.spotify.com/artist/6p6WdgrsAyVbtNVW2vRuHn">
									<img width={30} height={30} src="/spotify.svg" alt="" />
									<span>манер оф спич</span>
								</a>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>

			<section id="stack" className="stack">
				<div className="container xl">
					<div className="stack_inner">
						<div className="stack_icons">
							<img data-animate-top style={{transitionDelay: '0.2s'}} width={80} height={80} className="logo" src="/react-logo.svg" alt="" />
							<img data-animate-top style={{transitionDelay: '0.3s'}} width={80} height={80} className="logo" src="/typescript-logo.svg" alt="" />
							<img data-animate-right style={{transitionDelay: '0.1s'}} width={80} height={80} className="logo" src="/nodejs-logo.svg" alt="" />
							<img data-animate-top style={{transitionDelay: '0.2s'}} width={80} height={80} className="logo" src="/docker-logo.svg" alt="" />
							<img data-animate-left style={{transitionDelay: '0.4s'}} width={80} height={80} className="logo" src="/figma-logo.svg" alt="" />
							<img data-animate-right style={{transitionDelay: '0.3s'}} width={80} height={80}  className="logo" src="/jest-logo.svg" alt="" />
							<img data-animate-bottom style={{transitionDelay: '0.2s'}}  width={80} height={80} className="logo" src="/scss-logo.svg" alt="" />
							<img data-animate-top style={{transitionDelay: '0.2s'}}  width={80} height={80} className="logo" src="/webpack-logo.svg" alt="" />
							<img data-animate-right style={{transitionDelay: '0.1s'}}  width={80} height={80} className="logo" src="/redux-logo.svg" alt="" />
						</div>
						<div className="stack_content">
							<div className="stack_content-block">
								<h3 data-animate-top style={{transitionDelay: '0.2s'}}>My primary stack is </h3>
								<p>
									<span className="tech">React</span> and <span className="tech">TypeScript</span>. 
									I have extensive experience with server-side interactions via <span className="tech">REST APIs</span>. 
									I've used CSS preprocessors on all my projects and worked extensively with the UI-kits such as <span className="tech">Material UI. </span>

									I have experience with <span className="tech">MobX</span> and <span className="tech">Redux Toolkit</span> state managers, 
									but I also actively use React's built-in state management tools. I've worked with <span className="tech">GraphQL</span> and <span className="tech">RxJS</span>.
								</p> 
							</div>
							<div className="stack_content-block">
								<h3 data-animate-top style={{transitionDelay: '0.3s'}}>Related experience and technologies:</h3>
								<ul>
									<li><span className="tech">Figma</span>;</li>
									<li>Git (Gitlab/Github/Bitbucket);</li>
									<li>Extensively used <span className="tech">Docker</span> for application deployment;</li>
									<li>Experience writing unit and integration tests with <span className="tech">Jest</span> and the <span className="tech">React Testing Library</span>;</li>
									<li>Wrote simple backend applications in <span className="tech">Node.js</span> using Sequelize ORM.</li>
								</ul>	
							</div>
							<div className="stack_content-block">
								<p>
									I worked on products from MVP to production, including high-load back-office systems. 
									<br />
									For over a year, i served as lead developer: planning tasks, making architectural decisions, and ensuring the quality of the team's front-end.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="experience" className="experience">
				<div className="container">
					<div className="experience_inner">
						<h2 data-animate-top style={{transitionDelay: '0.1s'}}>
							I have extensive experience in client side development using a variety of technologies and i can create both <span className={`uppercase`}>
								landing pages
							</span> and <span className={`uppercase`}>
								large applications
							</span> with a lot of logic and states
						</h2>
					</div>
				</div>
			</section>

			<section className="projects">
				<div className="container xl">
					<div className="projects_inner">
						
						<div className="project_items">
							<div className="project_item">
								<h3 className="project_item-headline"></h3>
								<div className="project_item-description">
									<h2>Projects</h2>
								</div>
							</div>
							<div className="project_item">
								<h3 className="project_item-headline" data-animate-top style={{transitionDelay: '0.1s'}}>1. Cryptocurrency finance system</h3>
								<div className="project_item-description">
									<ul>
										<li data-animate-top style={{transitionDelay: '0.2s'}}>
											Developing a backoffice for cryptosystem configuration. The main part was implementing CRUD interfaces with tables, data validation, and business logic.
											<br />
											The architecture consisted of approximately 90 <span className="tech">microfrontends using Webpack Module Federation</span>, which allowed for independent development and deployment of parts of the system.
											I wrote the project from scratch through to the production stage.
										</li>
										<li data-animate-top style={{transitionDelay: '0.25s'}}>
											Development and support of several company websites and blogs based on <span className="tech">Ghost CMS</span>, with unique design themes.
											This work included layout using <span className="tech">Figma</span> layouts, improving website performance using PageSpeed ​​reports, developing new pages, and redesigns.
										</li>
									</ul>
								</div>
							</div>
							<div className="project_item">
								<h3 className="project_item-headline" data-animate-top style={{transitionDelay: '0.1s'}}>2. Advanced English language learning product</h3>
								<div className="project_item-description">
									<ul>
										<li data-animate-top style={{transitionDelay: '0.2s'}}>													
											Developed a mobile onboarding system with <span className="tech">Stripe</span> payment system integration.
											<br />
											I implemented several onboarding sequences with analytics links, allowing me to test and compare various user journeys.
										</li>
										<li data-animate-top style={{transitionDelay: '0.25s'}}>		
											Developing a backoffice for configuring application settings.
										</li>
									</ul>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</section>

			<section id="contacts" className="contacts">
				<div className="container xl">
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
								<a href="https://t.me/kharbacheuski/" target="_blank" rel="noreferrer" className="contacts-link">
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
