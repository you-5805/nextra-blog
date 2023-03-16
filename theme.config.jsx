export default {
  logo: <span>blog.yoiw.dev</span>,
  project: {
    link: 'https://github.com/you-5805/nextra-blog',
  },
  docsRepositoryBase: 'https://github.com/you-5805/nextra-blog',
  feedback: {
    content: null,
  },
  footer: {
    component: () => {
      return (
        <footer
          style={{
            padding: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 28,
          }}
        >
          <a href='https://yoiw.dev' target='_blank' rel='noreferrer noopener'>
            About me
          </a>
          <a href='https://twitter.com/yoiwamoto' target='_blank' rel='noreferrer noopener'>
            Twitter
          </a>
          <a href='https://github.com/you-5805' target='_blank' rel='noreferrer noopener'>
            GitHub
          </a>
        </footer>
      );
    },
  },
};
