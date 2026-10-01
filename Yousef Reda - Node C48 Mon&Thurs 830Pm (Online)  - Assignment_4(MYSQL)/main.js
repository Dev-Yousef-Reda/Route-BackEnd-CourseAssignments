import express from 'express';
import { initDatabase } from './DB/connection.db.js';
import productsRouter from './modules/products/products.router.js'
import suppliersRouter from './modules/suppliers/suppliers.router.js'
import salesRouter from './modules/sales/sales.router.js'
import reportsRouter from './modules/reports/reports.router.js'
import permissionsRouter from './modules/permissions/permissions.router.js'
import { globalErrorHandling } from './middleware/error.middleware.js';


const port = 3000;

const app = express();

app.use(express.json())

app.use('/products', productsRouter)
app.use('/suppliers', suppliersRouter)
app.use('/sales', salesRouter)
app.use('/reports', reportsRouter)
app.use('/user-permissions', permissionsRouter)

app.all('/*dummy', (req, res, next) => {
    res.status(404).json({ message: `invalid routing` })
})

app.use(globalErrorHandling)

try {
    await initDatabase(app, port);
    app.listen(port, () => {
        console.log(`server has started on port ${port}`);
    });
} catch (err) {
    console.error('Database initialization failed:', err.code ?? '', err.message);
    process.exit(1);
}