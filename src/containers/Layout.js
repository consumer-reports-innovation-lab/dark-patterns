import React from "react";
import PropTypes from "prop-types";
import PageHeader from "../common/ui/PageHeader"
import PageFooter from "../common/ui/PageFooter"

function Layout({ children }) {

  return (
    <>
      <PageHeader />
      <main id="pageContent" >{children}</main>
      <PageFooter />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
