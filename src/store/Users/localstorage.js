// usersStorage.js
export const saveUsersToStorage = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const loadUsersFromStorage = () => {
  const stored = localStorage.getItem("users");
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

export const saveCurrentLoginToStorage = (currentUser) => {
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
};

export const loadCurrentLoginToStorage = () => {
  const logined = localStorage.getItem("currentUser");
  return logined ? JSON.parse(logined) : null;
};
