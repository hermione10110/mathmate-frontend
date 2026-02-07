export async function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "ask 함수 연결 성공" })
  };
}
