import { envUtil } from '@/utils/index';

export const openExternalUrl = (link: string, withBackendUrl = false) => {
  const { api } = envUtil.getEnv();

  const url = withBackendUrl ? `${api}${link}` : link;
  window.open(url, '_self');
};
