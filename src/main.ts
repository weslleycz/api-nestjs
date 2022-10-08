import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = 3000;

const main = async () => {
    const app = await NestFactory.create(AppModule);
    await app.listen(port, () =>
        console.log(`🚀 Server started on port:${port}`),
    );
};

main();
