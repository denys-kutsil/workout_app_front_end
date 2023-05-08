export function objToFormData<T>(params: T): FormData {
  const form_data = new FormData();

  for (const key in params) {
    form_data.append(key, params[key] as string | Blob);
  }
  return form_data;
}
