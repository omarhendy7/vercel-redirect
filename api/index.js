export default function handler(req, res) {
  const pathParts = req.url.split('/');
  const type = pathParts[1]; // e.g. "job"
  const id = pathParts[2];   // e.g. "123"

  if (type === 'job' && id) {
    res.writeHead(301, {
      Location: `https://app.recruitera.ai/legacy-redirect?id=${id}`,
    });
    res.end();
  } else {
    res.writeHead(302, {
      Location: `https://app.recruitera.ai`,
    });
    res.end();
  }
}