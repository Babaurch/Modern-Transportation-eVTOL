import dotenv from "dotenv"

dotenv.config();

const config = {
    PORT: process.env.PORT || 2023,
    MONGODB_URL: process.env.MONGODB_URL,
    BASE_URL: process.env.BASE_URL
}

export default config