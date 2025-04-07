import {test, expect} from "@playwright/test"
import { execSync } from 'child_process';


test("Validation of Jules AI Collections using Newman", async () => {

    const result = execSync('npx newman run Jules_API_Collection.postman_collection.json').toString();
    console.log(result);

})