import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import Pagination from '../components/Pagination';
import { PostCard } from '../components/PostCard';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  PostFeed,
  Posts,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteNavMain,
  SiteArchiveHeader,
  AuthorProfileImage,
  ResponsiveHeaderBackground,
  SiteHeaderBackground,
  SiteMain,
  SiteTitle,
  SiteHeaderStyles,
} from '../styles/shared';
import config from '../website-config';
import { PageContext } from './post';

export interface IndexProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    header: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

const IndexPage: React.FC<IndexProps> = props => {
  const { width, height } = props.data.header.childImageSharp.fixed;

  return (
    <IndexLayout css={HomePosts}>
      <Helmet>
        <script>
        (function(t,e,n,a){function r(){return e&&e.now?e.now():null}if(!n.version){n._events=[];n._errors=[];n._metadata={};window.RM=n;n.install=function(e){n._options=e;var r=t.createElement("script");r.async=true;r.crossOrigin="anonymous";r.src=a;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)};n.identify=function(t,e){n._userId=t;n._identifyOptions=e};n.sendEvent=function(t,e){n._events.push({eventName:t,metadata:e,time:r()})};n.track=function(t,e){n._errors.push({error:t,metadata:e,time:r()})};n.addMetadata=function(t){n._metadata=Object.assign(n._metadata,t)}}})(document,window.performance,window.RM||{},"https://cdn.requestmetrics.com/agent/current/rm.js");
          RM.install({ 
              token: "z2tf3bn:s2jf7qr"
        });
         </script>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fixed.src}`}
        />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        {config.googleSiteVerification && (
          <meta name="google-site-verification" content={config.googleSiteVerification} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fixed.src}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        <meta property="og:image:width" content={width.toString()} />
        <meta property="og:image:height" content={height.toString()} />
      </Helmet>
      <Wrapper>
        <header className="site-archive-header" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>

          <ResponsiveHeaderBackground
            css={[outer, SiteHeaderBackground]}
            className="site-header-background"
          >
            <div css={inner}>
              <SiteHeaderContent css={AuthorHeader} className="site-header-content author-header">
                <img
                  style={{ marginTop: '8px' }}
                  css={[AuthorProfileImage, AuthorProfileBioImage]}
                  src={props.data.logo.childImageSharp.fixed.src}
                  // alt={author.id}
                />
                <AuthHeaderContent className="author-header-content">
                  <SiteTitle className="site-title">Hi, I'm Madison.</SiteTitle>
                  {
                    <AuthorBio className="author-bio">
                      Welcome! Lately you'll find me here scribbling down notes on what I'm
                      learning. If you read anything here and have feedback, corrections or
                      thoughts, I'd love to hear from you.
                    </AuthorBio>
                  }
                  <div css={AuthorMeta} className="author-meta">
                    {/* <div className="author-stats" css={[HiddenMobile]}>
                      posts
                    </div> */}
                    {/* {(
                      <AuthorSocialLink className="author-social-link">
                        <AuthorSocialLinkAnchor
                          href="https://madisonkanna.com/tags/bookshelf/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          My Bookshelf  📚
                        </AuthorSocialLinkAnchor>
                      </AuthorSocialLink>
                    )} */}

                    {/* {(
                      <AuthorSocialLink className="author-social-link">
                        <AuthorSocialLinkAnchor
                          href='https://madisonkanna.com/tags/coding/'
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          My Coding 💻
                        </AuthorSocialLinkAnchor>
                      </AuthorSocialLink>
                    )} */}
                    {
                      <AuthorSocialLink className="author-social-link">
                        <AuthorSocialLinkAnchor
                          href="https://madisonkanna.com/about/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          About me
                        </AuthorSocialLinkAnchor>
                      </AuthorSocialLink>
                    }
                  </div>
                </AuthHeaderContent>
              </SiteHeaderContent>
            </div>
          </ResponsiveHeaderBackground>
        </header>
        {/* <div
          css={[outer, SiteHeader, SiteHeaderStyles]}
          className="site-header-background"
          style={{
            backgroundImage: `url('${props.data.header.childImageSharp.fixed.src}')`,
          }}
        >
           */}
        {/* <div css={inner}>
            <SiteNav isHome />
            <SiteHeaderContent className="site-header-conent">
              <SiteTitle className="site-title">
                {props.data.logo ? (
                  <img
                    style={{ maxHeight: '205px', borderRadius: '90%' }}
                    src={props.data.logo.childImageSharp.fixed.src}
                    alt={config.title}
                  />
                ) : (
                  config.title
                )}
              </SiteTitle>
              <SiteDescription>{config.description}</SiteDescription>
            </SiteHeaderContent>
          </div> */}
        {/* </div> */}
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={[inner, Posts]}>
            <div css={[PostFeed]}>
              {props.data.allMarkdownRemark.edges.map((post, index) => {
                // filter out drafts in production
                return (
                  (post.node.frontmatter.draft !== true ||
                    process.env.NODE_ENV !== 'production') && (
                    <PostCard key={post.node.fields.slug} post={post.node} large={index === 0} />
                  )
                );
              })}
            </div>
          </div>
        </main>
        {props.children}
        {props.pageContext.numPages > 1 && (
          <Pagination
            currentPage={props.pageContext.currentPage}
            numPages={props.pageContext.numPages}
          />
        )}
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    logo: file(relativePath: { eq: "img/author.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: { eq: "img/blog-cover.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            tags
            draft
            excerpt
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fluid(quality: 100, srcSetBreakpoints: [40, 80, 120]) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;

const AuthorHeader = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10vw 0 10px;
  align-items: center;

  @media (max-width: 500px) {
    padding: 10px 0 0;

    /* no image */
    padding-bottom: 10px;
  }
`;

const AuthorBio = styled.h2`
  z-index: 10;
  flex-shrink: 0;
  margin: 6px 0 0;
  max-width: 46em;
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 400;
  opacity: 0.8;
`;

const AuthorProfileBioImage = css`
  z-index: 10;
  flex-shrink: 0;
  margin: -4px 0 0;
  width: 150px;
  height: 150px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 6px;
  border-radius: 100%;
`;

const AuthorMeta = css`
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin: 0 0 0 1px;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  .author-location + .author-stats:before,
  .author-stats + .author-social-link:before,
  .author-social-link + .author-social-link:before {
    content: '•';
    display: inline-block;
    margin: 0 12px;
    color: #fff;
    opacity: 0.6;
  }

  @media (max-width: 500px) {
    margin-top: 8px;
  }

  @media (max-width: 700px) {
    .author-location,
    .author-stats,
    .author-stats + .author-social-link:first-of-type:before {
      display: none;
    }
  }
`;

const HiddenMobile = css`
  @media (max-width: 500px) {
    display: none;
  }
`;

const AuthorSocialLinkAnchor = styled.a`
  color: #fff;
  font-weight: 600;

  :hover {
    opacity: 1;
  }
`;

const AuthorSocialLink = styled.span`
  display: inline-block;
  margin: 0;
  padding: 6px 0;
`;

const AuthHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 0 0 30px;
  @media (max-width: 500px) {
    align-items: center;
    margin: 16px 0 0 0;
  }
`;

const HomePosts = css`
  @media (min-width: 795px) {
    .post-card-large {
      flex: 1 1 100%;
      flex-direction: row;
      padding-bottom: 40px;
      min-height: 280px;
      border-top: 0;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large:not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-large .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-large .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-large .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
`;

export default IndexPage;
