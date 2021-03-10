import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import HEAD from "../common/ui/Head";
import PageHeader from "../common/ui/PageHeader";
import PageFooter from "../common/ui/PageFooter";

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <HEAD />
      <PageHeader siteTitle={data.site.siteMetadata.title} />

      <main id="pageContent">{children}</main>

      <PageFooter siteTitle={data.site.siteMetadata.title} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
