import { Document } from 'mongodb';\n\nexport interface User extends Document {\n  userId: string;\n  email: string;\n  tokenVersion: number;\n}\n
