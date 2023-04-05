import * as process from "process";

export const Exit = async () => {
    setTimeout(() => {
        process.exit();
    }, 6000);
}