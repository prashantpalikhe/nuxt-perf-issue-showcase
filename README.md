## Prerequisites

1. Download K6
2. Run Nuxt `yarn build && node .output/server/index.js`
3. Run K6 `k6 run load-test.js` for good page
4. Update `load-test.js` to test `/bad` and run `k6 run load-test.js` again

## What happens

The only difference between the good and bad page is the good page uses div in the for loop. And, the bad page uses NuxtClientFallback.

When running the load test where within a minute, we ramp up to 300 concurrent user, the good page responds consistently fast.

`http_req_duration: avg=4.06ms   min=882µs med=2.92ms max=39.26ms p(90)=7.93ms p(95)=10.5ms`

While the bad page gets increasingly slower.

`http_req_duration: avg=1.44s   min=11.31ms med=883.66ms max=27.93s p(90)=1.44s   p(95)=2.21s`
