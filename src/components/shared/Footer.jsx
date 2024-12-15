import { FacebookIcon, GithubIcon, RedoDotIcon } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
    return <footer class="bg-white dark:bg-gray-900">
        <div class="container p-6 mx-auto">
            <div class="lg:flex">
                <div class="w-full -mx-6 lg:w-2/5">
                    <div class="px-6">
                        <Link to="/">
                            <img class="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                        </Link>

                        <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                        <div class="flex mt-6 -mx-2">
                            <Link to="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                                <RedoDotIcon name="BrandReddit" className="w-5 h-5 fill-current" />
                            </Link>

                            <Link to="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                                <FacebookIcon name="BrandFacebook" className="w-5 h-5 fill-current" />
                            </Link>

                            <Link to="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                                <GithubIcon name="BrandGithub" className="w-5 h-5 fill-current" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="mt-6 lg:mt-0 lg:flex-1">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <h3 class="text-gray-700 uppercase dark:text-white">About</h3>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</Link>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</Link>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</Link>
                        </div>

                        <div>
                            <h3 class="text-gray-700 uppercase dark:text-white">Blog</h3>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</Link>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</Link>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</Link>
                        </div>

                        <div>
                            <h3 class="text-gray-700 uppercase dark:text-white">Products</h3>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</Link>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</Link>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</Link>
                        </div>

                        <div>
                            <h3 class="text-gray-700 uppercase dark:text-white">Contact</h3>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</Link>
                            <Link to="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</Link>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

            <div>
                <p class="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
            </div>
        </div>
    </footer>
};

export default Footer;
