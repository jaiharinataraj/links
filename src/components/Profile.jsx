export default function Profile() {
    return (
        <div className="text-center space-y-4 mb-6">

            <div className="relative w-fit mx-auto">

                <img
                    src="/profile.jpg"
                    alt="profile"
                    className="w-36 h-36 border-2 border-gray-300 rounded-full mb-7"
                />

                <span className="absolute -bottom-1 right-5 px-3 py-1 text-xs tracking-tight 
                 font-semibold rounded-full text-gray-800
                 shadow-xs backdrop-blur-sm  bg-gray-100/20 border border-gray-300">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Open to Work
                    </a>
                </span>

            </div>

            <h1 className="text-3xl tracking-tight text-gray-800 font-semibold mb-0">
                Jai Hari Nataraj
            </h1>

            <p className="gradient-text tracking-tight inline-block mb-0 text-2xl font-semibold">
                Data Analyst
            </p>

        </div>
    )
}