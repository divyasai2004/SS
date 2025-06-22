const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} <strong>SyllabusSeal</strong> by{" "}
        <a
          href="https://myportfolio-zeta-six-93.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Divyasai Ganti ↗
        </a>
      </p>

      {/* Optional: Add credit or version info here */}
      {/* <p style={styles.subText}>v1.0.0 • Built with ❤️ using React</p> */}

      <style>{`
        @media (max-width: 500px) {
          footer p {
            font-size: 0.85rem;
            padding: 0 10px;
          }
        }

        a:hover {
          color: #023e8a;
        }
      `}</style>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: 'auto',
    padding: '1rem 1.2rem',
    textAlign: 'center',
    background: 'linear-gradient(to right, #e0f7fa, #fce4ec)',
    borderTop: '1px solid #ddd',
    color: '#2c3e50',
    fontSize: '0.95rem',
    position: 'relative',
    zIndex: 5,
  },
  text: {
    margin: 0,
    lineHeight: '1.5'
  },
  link: {
    color: '#0077b6',
    textDecoration: 'underline',
    fontWeight: 500,
    transition: 'color 0.3s ease'
  },
  subText: {
    marginTop: '0.3rem',
    color: '#888',
    fontSize: '0.8rem',
  }
};

export default Footer;
