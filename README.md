# NextInvoice

NextInvoice is a system of invoices that allows you to track and manage your invoices in an easy and fast way. You can use NextInvoice to see the status of your invoices, generate financial reports and more.

NextInvoice is built with Next.js 14, a React framework that offers features like hybrid rendering, dynamic routing, pre-rendering and performance optimization. The start of the project was based on the Next.js Learn project from the official Next.js website.

## How to use

To use NextInvoice, you need to have Node.js (version 18 or higher) and npm (version 6 or higher) installed on your computer. Then, follow the steps below:

1. Clone the github repository to your computer using the command `git clone https://github.com/theGUI001/NextInvoice`.
2. Enter the project folder using the command `cd nextinvoice`.
3. Create a .env file in the following pattern:

 ```env
 POSTGRES_URL=""
 POSTGRES_PRISMA_URL=""
 POSTGRES_URL_NON_POOLING=""
 POSTGRES_USER=""
 POSTGRES_HOST=""
 POSTGRES_PASSWORD=""
 POSTGRES_DATABASE=""

 # To generate AUTH_SECRET use the following command `openssl rand -base64 32
 AUTH_SECRET=
 AUTH_URL=
 ```

4. Install the project dependencies using the command `npm install`.
5. Start the development server using the command `npm run dev`.
6. Open your browser and access the address `http://localhost:3000` to see NextInvoice in action.

## Features

NextInvoice offers the following features:

- Tracking of invoices by status, such as pending, paid, overdue and canceled.
- Generation of financial reports.

## Contribution

NextInvoice is an open source project and accepts contributions from the community. If you want to contribute to NextInvoice, please fork the project, make your modifications and submit a pull request with some information about the changes made, such as the impact of this change on the project and any information you want to add about the changes

## License

NextInvoice is licensed under the MIT License, which allows the use, modification and distribution of the source code of the project. For more details, see the [LICENSE](https://github.com/theGUI001/NextInvoice/blob/master/LICENSE) file in the github repository.
