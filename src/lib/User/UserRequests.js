import { LoginUser } from "../endpoints";

export const loginUser = async (user) => {
  const login = { Payload: user.details.payload, Password: user.details.password };
  let result = await fetch(LoginUser, {
    method: "POST",
    body: JSON.stringify(login),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!result.ok) {
    throw new Error("Something went wrong");
  }
  return await result.json();
};
