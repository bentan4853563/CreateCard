import { useEffect, useState } from "react";
import SupportIllustration from "../assets/support-illustration.svg";

const Support = () => {
	const [expand, setExpand] = useState({ sending_money: true });

	const handleClickExpand = (id) => {
		if (id) {
			setExpand((prevState) => ({
				...prevState,
				[id]: !prevState[id],
			}));
		}
	};

	useEffect(() => {
		console.log(expand);
	}, [expand]);

	return (
		<div className='flex flex-col min-h-screen overflow-hidden'>
			{/* Site header */}
			<header className='fixed w-full bg-white border-b border-slate-200 z-30'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6'>
					<div className='flex items-center justify-between h-16 md:h-20'>
						{/* Site branding */}
						<div className='shrink-0 mr-4'>
							{/* Logo */}
							<a
								className='flex items-center'
								href='/'
								aria-label='Cruip'
							>
								<svg
									width='30'
									height='30'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g
										fillRule='nonzero'
										fill='none'
									>
										<g
											className='fill-blue-500'
											transform='translate(3 3)'
										>
											<circle
												cx='5'
												cy='5'
												r='5'
											/>
											<circle
												cx='19'
												cy='5'
												r='5'
											/>
											<circle
												cx='5'
												cy='19'
												r='5'
											/>
											<circle
												cx='19'
												cy='19'
												r='5'
											/>
										</g>
										<g className='fill-sky-300'>
											<circle
												cx='15'
												cy='5'
												r='5'
											/>
											<circle
												cx='25'
												cy='15'
												r='5'
											/>
											<circle
												cx='15'
												cy='25'
												r='5'
											/>
											<circle
												cx='5'
												cy='15'
												r='5'
											/>
										</g>
									</g>
								</svg>
								<span className='text-slate-400 font-[550] ml-4'>
									Support Center
								</span>
							</a>
						</div>

						{/* Desktop navigation */}
						<nav className='flex grow'>
							{/* Desktop sign in links */}
							<ul className='flex grow justify-end flex-wrap items-center'>
								<li className='ml-3'>
									<a
										className='btn-sm inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 shadow-sm'
										href='#0'
									>
										Get in touch
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>

			{/* Page content */}
			<main className='grow'>
				<section className='relative'>
					<div className='absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10'>
						<img
							alt='SupportIllustration'
							className='max-w-none'
							src={SupportIllustration}
							width='1440'
							height='286'
							aria-hidden='true'
						/>
					</div>

					<div className='max-w-6xl mx-auto px-4 sm:px-6'>
						{/* Main content */}
						<div
							className='md:flex md:justify-between'
							x-data='{ sidebarExpanded: false }'
						>
							{/* Backdrop */}
							<div className='md:hidden fixed inset-0 z-10 bg-white bg-opacity-75 transition-opacity'></div>

							{/* Sidebar */}
							<aside
								id='sidebar'
								className='fixed left-0 top-0 bottom-0 w-64 h-screen bg-white border-r border-slate-200 px-4 sm:px-6 md:ml-0 md:pr-8 md:left-auto overflow-y-auto no-scrollbar md:shrink-0 z-10 md:!opacity-100 md:!block'
							>
								<div className='pt-28 pb-12 md:pt-36 md:pb-16'>
									<h3 className='text-lg font-bold text-slate-800 mb-4'>
										Popular topics
									</h3>

									{/* Docs nav */}
									<nav className='md:block'>
										<ul className='space-y-3'>
											{/* 1st level */}
											<li>
												<a
													id='welcome'
													onClick={(e) => handleClickExpand(e.currentTarget.id)}
													className='flex items-center text-md font-bold text-slate-800'
													href='#0'
												>
													<svg
														className={`fill-slate-400 mr-2 ${
															expand["welcome"] ? "rotate-90" : ""
														}`}
														width='8'
														height='8'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
													</svg>
													<span>Welcome</span>
												</a>
												{/* 2nd level */}
												{expand["welcome"] && (
													<ul className='pl-6 mt-2 space-y-2 text-sm'>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Installation
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Quick start
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Folder content
															</a>
														</li>
													</ul>
												)}
											</li>
											{/* 1st level */}
											<li x-data='{ open: true }'>
												<a
													id='sending_money'
													onClick={(e) => handleClickExpand(e.currentTarget.id)}
													className='flex items-center text-md font-bold text-slate-800'
													href='#0'
												>
													<svg
														className={`fill-slate-400 mr-2 ${
															expand["sending_money"] ? "rotate-90" : ""
														}`}
														width='8'
														height='8'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
													</svg>
													<span>Sending money</span>
												</a>
												{/* 2nd level */}
												{expand["sending_money"] && (
													<ul className='pl-6 mt-2 space-y-2 text-sm'>
														<li>
															<a
																className='text-blue-500 font-[550]'
																href='#0'
															>
																How do I send money to a bank account or card?
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																What recipient account details do I need?
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																How do I send money to a bank account or card?
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																How do I download my transfer confirmation?
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																How to send money to a specific currency
															</a>
														</li>
													</ul>
												)}
											</li>
											{/* 1st level */}
											<li x-data='{ open: false }'>
												<a
													id='account_management'
													onClick={(e) => handleClickExpand(e.currentTarget.id)}
													className='flex items-center text-md font-bold text-slate-800'
													href='#0'
												>
													<svg
														className={`fill-slate-400 mr-2 ${
															expand["ccount_management"] ? "rotate-90" : ""
														}`}
														width='8'
														height='8'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
													</svg>
													<span>Account management</span>
												</a>
												{/* 2nd level */}
												{expand["account_management"] && (
													<ul className='pl-6 mt-2 space-y-2 text-sm'>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
													</ul>
												)}
											</li>
											{/* 1st level */}
											<li x-data='{ open: false }'>
												<a
													id='card'
													onClick={(e) => handleClickExpand(e.currentTarget.id)}
													className='flex items-center text-md font-bold text-slate-800'
													href='#0'
												>
													<svg
														className={`fill-slate-400 mr-2 ${
															expand["card"] ? "rotate-90" : ""
														}`}
														width='8'
														height='8'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
													</svg>
													<span>Card</span>
												</a>
												{/* 2nd level */}
												{expand["card"] && (
													<ul className='pl-6 mt-2 space-y-2 text-sm'>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
													</ul>
												)}
											</li>
											{/* 1st level */}
											<li x-data='{ open: false }'>
												<a
													id='credit_product'
													onClick={(e) => handleClickExpand(e.currentTarget.id)}
													className='flex items-center text-md font-bold text-slate-800'
													href='#0'
												>
													<svg
														className={`fill-slate-400 mr-2 ${
															expand["credit_product"] ? "rotate-90" : ""
														}`}
														width='8'
														height='8'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
													</svg>
													<span>Credit products</span>
												</a>
												{/* 2nd level */}
												{expand["credit_product"] && (
													<ul className='pl-6 mt-2 space-y-2 text-sm'>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
													</ul>
												)}
											</li>
											{/* 1st level */}
											<li x-data='{ open: false }'>
												<a
													id='app_feature'
													onClick={(e) => handleClickExpand(e.currentTarget.id)}
													className='flex items-center text-md font-bold text-slate-800'
													href='#0'
												>
													<svg
														className={`fill-slate-400 mr-2 ${
															expand["app_feature"] ? "rotate-90" : ""
														}`}
														width='8'
														height='8'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
													</svg>
													<span>App features</span>
												</a>
												{/* 2nd level */}
												{expand["app_feature"] && (
													<ul className='pl-6 mt-2 space-y-2 text-sm'>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
													</ul>
												)}
											</li>
											{/* 1st level */}
											<li x-data='{ open: false }'>
												<a
													id='insurance'
													onClick={(e) => handleClickExpand(e.currentTarget.id)}
													className='flex items-center text-md font-bold text-slate-800'
													href='#0'
												>
													<svg
														className={`fill-slate-400 mr-2 ${
															expand["app_feature"] ? "rotate-90" : ""
														}`}
														width='8'
														height='8'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
													</svg>
													<span>Insurance</span>
												</a>
												{/* 2nd level */}
												{expand["insurance"] && (
													<ul className='pl-6 mt-2 space-y-2 text-sm'>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
													</ul>
												)}
											</li>
											{/* 1st level */}
											<li x-data='{ open: false }'>
												<a
													id='wealth_trading'
													onClick={(e) => handleClickExpand(e.currentTarget.id)}
													className='flex items-center text-md font-bold text-slate-800'
													href='#0'
												>
													<svg
														className={`fill-slate-400 mr-2 ${
															expand["wealth_trading"] ? "rotate-90" : ""
														}`}
														width='8'
														height='8'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
													</svg>
													<span>Wealth and trading</span>
												</a>
												{/* 2nd level */}
												{expand["wealth_trading"] && (
													<ul className='pl-6 mt-2 space-y-2 text-sm'>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
														<li>
															<a
																className='text-slate-600 font-[350]'
																href='#0'
															>
																Link
															</a>
														</li>
													</ul>
												)}
											</li>
										</ul>
									</nav>
								</div>
							</aside>

							{/* Page container */}
							<div className='md:grow md:pl-[21rem]'>
								<div className='pt-28 pb-12 md:pt-36 md:pb-16'>
									<div className='md:hidden flex items-center mb-8'>
										{/* Hamburger button */}
										<button
											className='hamburger'
											aria-controls='sidebar'
										>
											<span className='sr-only'>Menu</span>
											<svg
												className='w-6 h-6 fill-slate-600'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<rect
													x='4'
													y='5'
													width='16'
													height='2'
												></rect>
												<rect
													x='4'
													y='11'
													width='16'
													height='2'
												></rect>
												<rect
													x='4'
													y='17'
													width='16'
													height='2'
												></rect>
											</svg>
										</button>
										{/* Breadcrumbs */}
										<div className='flex items-center text-sm whitespace-nowrap min-w-0 ml-3'>
											<span className='text-slate-500'>Sending money</span>
											<svg
												className='h-3 w-3 shrink-0 fill-slate-400 mx-2'
												viewBox='0 0 16 16'
											>
												<path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z'></path>
											</svg>
											<span className='text-slate-800 font-medium truncate'>
												How do I send money to a bank account or card?
											</span>
										</div>
									</div>

									<article className='text-slate-500 font-[350]'>
										<div className='flex items-center mb-4'>
											<svg
												width='24'
												height='24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<defs>
													<linearGradient
														x1='50%'
														y1='100%'
														x2='50%'
														y2='0%'
														id='a'
													>
														<stop
															stopColor='#2563EB'
															offset='0%'
														/>
														<stop
															stopColor='#3B82F6'
															offset='100%'
														/>
													</linearGradient>
												</defs>
												<g
													fill='none'
													fillRule='evenodd'
												>
													<path
														d='M6 22c-.101 0 2.023-8.649 2.023-8.649a.498.498 0 0 1 .83-.204l3.5 3.5a.5.5 0 0 1-.053.753l-6 4.5a.496.496 0 0 1-.3.1Z'
														fill='#1D4ED8'
													/>
													<path
														d='M17.496 23a.499.499 0 0 1-.3-.1L1.2 10.9a.498.498 0 0 1 .114-.864l20-8a.5.5 0 0 1 .676.562l-4.004 20a.5.5 0 0 1-.49.402Z'
														fill='url(#a)'
														fillRule='nonzero'
													/>
													<path
														d='M6 22a.498.498 0 0 1-.5-.5V14a.5.5 0 0 1 .202-.401l15.5-11.5a.5.5 0 0 1 .645.761L8.099 16.075l-1.625 5.583A.5.5 0 0 1 6 22Z'
														fill='#7DD3FC'
														fillRule='nonzero'
													/>
												</g>
											</svg>
											<span className='text-lg font-bold text-slate-800 ml-2.5'>
												Sending money
											</span>
										</div>
										<h2 className='h3 text-slate-800 mb-4'>
											How do I send money to a bank account or card?
										</h2>
										<div className='space-y-6'>
											<div className='space-y-4'>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua. Quis enim lobortis scelerisque
													fermentum. Neque sodales ut etiam sit amet how to
													manage anything malesuada proin libero nunc consequat
													interdum varius. Quam pellentesque nec nam aliquam sem
													et tortor consequat. Pellentesque adipiscing commodo
													elit at imperdiet.
												</p>
												<p>
													Semper auctor neque vitae tempus quam pellentesque
													nec. Amet dictum sit amet justo donec enim diam.
													Varius sit amet mattis vulputate enim nulla aliquet
													porttitor. Odio pellentesque diam volutpat commodo
													sed. Elit sed vulputate mi sit amet mauris commodo
													quis imperdiet.
												</p>
											</div>
											<div className='space-y-4'>
												<h3 className='text-xl font-bold text-slate-800'>
													Sending money to bank account
												</h3>
												<p>
													To transfer any of over 30 supported fiat currencies
													to a bank account, on the main accounts screen tap
													transfer (button with two arrows at the bottom of the
													screen) → New → Add a bank recipient. You'll be asked
													to add the bank transfer details for either an
													Individual, or a Business if you're paying a company.
												</p>
											</div>
											<div className='space-y-4'>
												<h3 className='text-xl font-bold text-slate-800'>
													Sending money to card
												</h3>
												<p>
													Enter the details of the card you want to send money
													to. If you have the card at hand, you can take a
													picture of the front of the card or tap the back of
													your phone against the card to capture the card
													number. Hit 'Save securely' which saves the card
													number details so you won't have to re-enter it next
													time.
												</p>
												<p>
													Enter the amount you wish to send and below the
													currency, you can choose from which currency balance
													the amount will be deducted. There is also an option
													to add a note to yourself, but it is not required and
													won't be sent to the beneficiary.
												</p>
											</div>
											<div className='space-y-4'>
												<h3 className='text-xl font-bold text-slate-800'>
													Conclusion
												</h3>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua, quis enim lobortis scelerisque
													fermentum, neque sodales ut etiam sit amet how to
													manage anything malesuada proin libero nunc consequat
													interdum varius, nec{" "}
													<a
														className='text-blue-500 font-[550] hover:underline'
														href='#0'
													>
														pellentesque
													</a>{" "}
													nec nam aliquam sem et tortor consequat. Pellentesque
													adipiscing commodo elit{" "}
													<a
														className='text-blue-500 font-[550] hover:underline'
														href='#0'
													>
														here
													</a>
													.
												</p>
											</div>
										</div>
									</article>

									<footer className='pt-8 mt-8 border-t border-slate-200'>
										<div className='flex items-center space-x-6'>
											<div className='text-lg font-bold text-slate-800'>
												Was this page helpful?
											</div>
											<div className='flex items-center space-x-2'>
												<button className='btn-sm text-sm px-3 py-1.5 inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 shadow-sm'>
													<svg
														className='shrink-0 fill-blue-300 mr-2'
														width='12'
														height='13'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M9.956 4.516H6.731v-3a1.314 1.314 0 0 0-1.5-1.5.5.5 0 0 0-.45.375L3 6.016v6h6.431c.985-.02 1.81-.75 1.95-1.725l.6-3.45a1.9 1.9 0 0 0-.45-1.575 1.884 1.884 0 0 0-1.575-.75ZM0 6.016h2v6H0z' />
													</svg>
													<span>Yes</span>
												</button>
												<button className='btn-sm text-sm px-3 py-1.5 inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 shadow-sm'>
													<svg
														className='shrink-0 fill-blue-300 mr-2'
														width='12'
														height='13'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M9.956 7.5H6.731v3a1.314 1.314 0 0 1-1.5 1.5.5.5 0 0 1-.45-.375L3 6V0h6.431c.985.02 1.81.75 1.95 1.725l.6 3.45a1.9 1.9 0 0 1-.45 1.575c-.37.493-.959.773-1.575.75ZM0 6h2V0H0z' />
													</svg>
													<span>Nope</span>
												</button>
											</div>
										</div>
									</footer>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Support;
