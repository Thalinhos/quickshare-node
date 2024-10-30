import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// model User {
//     id                 Int      @id @default(autoincrement())
//     name               String
//     email              String?   @unique
//     password           String
//     createdAt          DateTime @default(now())
//     updatedAt          DateTime @default(now()) @updatedAt
//   }


async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'admin',
      email: 'admin@prisma.io',
      password: 
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })