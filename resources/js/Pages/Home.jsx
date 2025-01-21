// import Layout from "@/Layouts/Layout.jsx";

import {Head, Link, usePage} from '@inertiajs/react'
import {useState} from "react";

export default function Home({ posts }) {
    console.log(posts)

    console.log(usePage())

    const { component } = usePage();

    const { flash } = usePage().props;

    const [flashMessage, setFlashMessage] = useState(flash.message);

    setTimeout(() => {
        setFlashMessage(null);
    }, 2000);

    return (
        <>
            <Head>
                <title>{component}</title>
                <meta name="description" content="Your page description" />
            </Head>

            <h1 className="title">Hello, Sadboiz IT</h1>
            { flashMessage && <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">{flashMessage}</div> }
            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className='p-4 border-b'>
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{ new Date(post.created_at).toLocaleTimeString() }</span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                        <Link href={`/posts/${post.id}`} className="text-link">Read more...</Link>
                    </div>
                ))}
            </div>

            <div>
                {posts.links.map((link) =>
                    link.url ? (
                    <Link
                        key={link.label}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 mx-1 ${link.active ? 'text-blue-500 font-bold' : ''}`}
                    />
                ) : (
                    <span
                        key={link.label}  dangerouslySetInnerHTML={{ __html: link.label }}
                        className='p-1 mx-1 text-slate-300'
                    ></span>
                ))
                }
            </div>

            {/*<Link preserveScroll href="/" className="block title mt-[1000px]" >{ new Date().toLocaleTimeString() }</Link>*/}
        </>
    );
}

// Home.layout = page => <Layout children={page} />;
//
// export default Home;
