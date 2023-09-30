import client from "./sanity.client";

export async function GetHomeCarouselPics(){
    const homeCarouselPics = await client.fetch(`*[_type == "homeCarouselPics"]{
        _id,
        name,
        "pics": pic.asset->url,
    }`);
    return homeCarouselPics
}