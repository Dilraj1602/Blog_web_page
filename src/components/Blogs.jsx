import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

function Blogs() {
    const { loading, posts } = useContext(AppContext);

    return (
        <div className="w-[50%] mx-auto py-4">
            {
                loading ?
                    (
                        <div className="flex justify-center items-center h-[80vh]">
                            <Spinner />
                        </div>
                    ) :
                    (
                        posts.length === 0 ?
                            (
                                <div><p>No posts found</p></div>
                            ) :
                            (
                                posts.map((item) => (
                                    <div key={item.id} className="mb-6">
                                        <p className="font-bold text-lg">{item.title}</p>
                                        <p>By <span>{item.author}</span> on <span>{item.category}</span></p>
                                        <p>Posted on <span>{item.date}</span></p>

                                        <div className="mt-2">
                                            {item.content}
                                        </div>

                                        <div className="mt-2 space-x-2">
                                            {item.tags.map((tag, index) => {
                                                return <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm">{tag}</span>;
                                            })}
                                        </div>
                                    </div>
                                ))
                            )
                    )
            }
        </div>
    );
}

export default Blogs;
