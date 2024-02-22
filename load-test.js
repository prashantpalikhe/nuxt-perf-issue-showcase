import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [{ duration: "1m", target: 300 }],
};

export default function () {
  http.get("http://localhost:3000/bad");

  sleep(1);
}
