import { CloudFrontRequestCallback, CloudFrontRequestEvent } from 'aws-lambda';

export const addOrSubtract = (operation: string, x: number, y: number) =>
    operation === "substract" ? x - y : x + y;

// : Promise<CloudFrontRequestResult>
export async function myFunction(event: CloudFrontRequestEvent, callback: CloudFrontRequestCallback) {

    console.log('event', JSON.stringify(event));

    const request = event.Records[0].cf.request;
    request.uri = request.uri.replace(/^\/ci\/...\//, '\/');

    console.log('request', JSON.stringify(request));

    console.log("math", addOrSubtract('substract', 10, 2));

    callback(null, request);
}