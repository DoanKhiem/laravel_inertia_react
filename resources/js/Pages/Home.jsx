// import Layout from "@/Layouts/Layout.jsx";

import {Link} from "@inertiajs/react";

export default function Home({ posts }) {
    console.log(posts)
    return (
        <>
            <h1 className="title">Hello, Sadboiz IT</h1>

            <div>
                {posts.map((post) => (
                    <div key={post.id} className='p-4 border-b'>
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{ new Date(post.created_at).toLocaleTimeString() }</span>
                        </div>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>

            {/*<Link preserveScroll href="/" className="block title mt-[1000px]" >{ new Date().toLocaleTimeString() }</Link>*/}
        </>
    );
}

// Home.layout = page => <Layout children={page} />;
//
// export default Home;
