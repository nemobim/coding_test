function solution(id_pw, db) {
  const [id, password] = id_pw;

  for (const data of db) {
    const [exId, exPassword] = data;
    if (id === exId && password === exPassword) return "login";
    else if (id === exId && password !== exPassword) return "wrong pw";
  }
  return "fail";
}

/**다른 풀이 */
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
