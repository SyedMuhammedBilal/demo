import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Button from '../../Reusable-Components/Button';
import Aos from 'aos';
import { useStaticQuery, graphql } from "gatsby"
import 'aos/dist/aos.css';
import FooterEmail from './FooterEmail';

function Footer() {
    const Footer_Link = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/footer/link"}}}) {
        edges {
          node {
            frontmatter {
              link
            }
          }
        }
      }
    }
  `)

  const data = Footer_Link?.allMarkdownRemark?.edges[0]?.node?.frontmatter

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<footer className="text-gray-600 body-font footer">
			<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
					<div data-aos="fade-right" className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2
							style={{
								fontSize: '18px',
								fontWeight: '600',
								fontFamily:
									'Marr Sans Web, Helvetica Neue, HelveticaNeue-Light, Helvetica Neue Light, Helvetica, Arial, Lucida Grande, sans-serif',
							}}
							className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
						>
							QUICK LINKS
						</h2>
						<nav className="list-none mb-10 blog-list">
							<li>
								<Link to="/" className="text-gray-600 hover:text-black-800">
									Home
								</Link>
							</li>
							<li>
								<Link to="blog-list" className="text-gray-600 hover:text-black-800">
									Customer Stories
								</Link>
							</li>
							<li>
								<Link to="aboutus" className="text-gray-600 hover:text-black-800">
									About Us
								</Link>
							</li>
						</nav>
					</div>

					<div data-aos="fade-right" className="lg:w-1/4 md:w-1/2 w-full px-4">
						{/* footer email */}
                        <FooterEmail />
					</div>
				</div>
			</div>
			<div className="bg-gray-100">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Life And Half</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
						<a href={data?.link[0]} className="text-gray-500">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
							</svg>
						</a>
						<a href={data?.link[1]} className="ml-3 text-gray-500">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
							</svg>
						</a>
						<a href={data?.link[2]} className="ml-3 text-gray-500">
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
							</svg>
						</a>
						<a href={data?.link[3]} className="ml-3 text-gray-500">
							<svg
								fill="currentColor"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={0}
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									stroke="none"
									d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
								/>
								<circle cx={4} cy={4} r={2} stroke="none" />
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
