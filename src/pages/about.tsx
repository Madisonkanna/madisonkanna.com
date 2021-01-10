import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
               Hey! I'm Madison. Thanks for visiting my  blog.
                <h3>Me in 20 seconds</h3>
                <p>I'm a JavaScript developer working at Keeper Security.</p>
                <p>I'm creating the <a href="https://madisonkanna.com/codebookclub">CodeBookClub.</a></p>
                <p>I'm living in California.</p>
                <h3>My most read articles</h3>
                                <p><a href="https://www.madisonkanna.com/why-im-glad-i-grew-up-playing-neopets/">Why I'm Glad I Grew Up Playing Neopets</a></p>
                <p><a href="https://www.madisonkanna.com/how-i-went-from-beginner-to-developer/">How I went from complete beginner to software developer — and how you can too</a></p>

                <p>
                <a  href="https://madisonkanna.com/codingtutorialstoprojects/">How to go from coding tutorials to building your own projects</a>
                </p>
                <h3>Podcast appearances</h3>
                <p>The freeCodeCamp podcast:  <a href="https://www.freecodecamp.org/news/from-homeschooler-to-fullstack-developer/">From homeschooler to self-taught full stack developer</a></p>
                <p>secondCareerDevs: <a href="https://secondcareerdevs.com/episodes/madison-kanna">Fashion Model to Full Stack Dev</a></p>
                <p>Learn To Code With Me: <a href="https://learntocodewith.me/podcast/fashion-model-to-frontend-developer-with-madison-kanna/">Coding Newbie To Apprentice</a></p>
                <h3>All my writing by category:</h3>
                <p>

                <a href="https://www.madisonkanna.com/tags/coding/">Coding</a>
                </p>
                 <p> <a href="https://www.madisonkanna.com/tags/personal/">Personal</a></p>
         
                {/* <p><a href="https://www.madisonkanna.com/tags/bookshelf/">Bookshelf</a>

                </p> */}
                <h3>Connect with me</h3>
                <p>Join over 4,000 people and <a href="https://madisonkanna.us14.list-manage.com/subscribe/post?u=323fd92759e9e0b8d4083d008&id=033dfeb98f">subscribe</a> to my email list.</p>
                <p>Feel free to message me on <a href="https://twitter.com/Madisonkanna">Twitter</a> or email me: Madisonkanna@gmail.com. </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
