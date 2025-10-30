import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone", // Важно для продакшена
    trailingSlash: true,
    images: {
        unoptimized: true, // Если используете статический экспорт
    },
};

export default nextConfig;
