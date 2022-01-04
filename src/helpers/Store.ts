function StoreSet(key: string, values: any, ttl = 0): any {
  let store = JSON.stringify({
    ttl: ttl > 0 ? +new Date() + ttl * 1000 : 0,
    values
  });

  localStorage.setItem(key, store);
}

/**
 * Guarda y obtiene valores de localStorage
 * @param key llave que se utilizara para guardar en localStorage
 * @param _ttl tiempo a vivir en localStorage en segundos
 * @param cb función que se ejecutara en caso de que no se encuentre un valor en localStorage
 * @returns Promise<any>
 */
export default async function Store(key: string, _ttl: number, cb: CallableFunction): Promise<any> {
  let store = localStorage.getItem(key) || "{}";
  const { values = undefined, ttl = 0 } = JSON.parse(store);

  if ((ttl > 0 && ttl < Date.now()) || values === undefined) {
    let response = await cb();
    StoreSet(key, response, _ttl);
    return response;
  }

  return values;
}