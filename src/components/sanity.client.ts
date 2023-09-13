import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
    projectId: "543m78up",
    dataset: "production",
    apiVersion: "2023-09-13",
    useCdn: false,
};

const client = createClient(config);

export default client;