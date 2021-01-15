import request from "@/api";

export function fetchData() {
  return request({
    url: "/mock/example/table"
  });
}
