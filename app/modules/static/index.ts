import { ServeStaticModule, } from "@nestjs/serve-static";
import { ModuleMetadata } from "@nestjs/common";
import { join } from "path";

export const ServeStaticForRoot = (): ModuleMetadata => {
    return ServeStaticModule.forRoot({
        rootPath: join(process.cwd(), "./", "assets"),
    })
}