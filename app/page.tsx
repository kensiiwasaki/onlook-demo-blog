'use client';

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100">
            <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800 font-japanese">ブログ</h1>
                    <div className="space-x-6">
                        <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                            ホーム
                        </a>
                        <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                            記事
                        </a>
                        <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <section className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            ようこそ私のブログへ
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            日々の思考と発見を共有する場所です
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <article
                                key={item}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="h-48 bg-gradient-to-r from-purple-200 to-pink-200"></div>
                                <div className="p-6">
                                    <p className="text-sm text-pink-500 mb-2">2024年1月{item}日</p>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                        ブログ記事 #{item}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        これはサンプルのブログ記事の説明文です。クリックして続きを読むことができます。
                                    </p>
                                    <button className="text-pink-500 hover:text-pink-600 transition-colors">
                                        続きを読む →
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="bg-white/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
                    <p>© 2024 ブログサイト. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
