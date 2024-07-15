import personSmiling from "../../public/personsmiling.jpg";
import personSmiling2 from "../../public/personsmiling2.jpg";
import personSmiling3 from "../../public/personsmiling3.jpg";

export default function HomePage() {
  return (
    <main className="home">
      <section className="main-section">
        <article>
          <h2>See our product</h2>
          <p>
            Check out our Kanban Board: Simplify task management, boost
            productivity, and collaborate effortlessly. Experience efficiency
            like never before
          </p>
        </article>
        <button>Try Now</button>
      </section>

      <section className="review review1">
        <article className="img">
          <img src={personSmiling} alt="" />
        </article>
        <article className="text">
          <p>
            Before using Kanban Board, I was so disorganized that I struggled to
            keep track of my tasks and deadlines. It was chaos trying to juggle
            everything in my head or scattered across different apps. But since
            discovering Kanban Board, everything has changed for the better.
            Now, I can easily visualize all my tasks, prioritize them at a
            glance, and track their progress effortlessly. The board's
            simplicity is its genius – it's intuitive enough for anyone to use,
            yet powerful enough to handle even complex projects. My productivity
            has skyrocketed, and I no longer waste time wondering what to do
            next or chasing after lost notes. Kanban Board has truly transformed
            how I work, making me more efficient and organized than ever before.
            If you're looking to take control of your tasks and get things done
            without the stress, I highly recommend giving Kanban Board a try.
            You won't regret it!
          </p>

          <h3>
            Jonathan Anderson <span>Kanban board's user</span>
          </h3>
        </article>
      </section>

      <section className="review review2">
        <article className="img">
          <img src={personSmiling2} alt="" />
        </article>
        <article className="text">
          <p>
            I've been using this kanban board website for a while now, and it's
            become an essential part of my daily workflow organization. What
            stands out immediately is its simplicity and user-friendly
            interface. Creating tasks is a breeze, and the straightforward
            design allows me to focus on what matters most: getting things done.
            The ability to categorize tasks into "In Progress" and "Done"
            columns is surprisingly effective in helping me track progress
            without any unnecessary complexity. It's refreshing to use a tool
            that doesn't overwhelm with features I don't need—no notifications
            or user groups, just a clean slate where I can manage my tasks
            efficiently. Performance-wise, this website delivers. It loads
            quickly every time I access it, whether I'm on my laptop or mobile
            device. There's no lag in moving tasks between columns, and
            everything stays synced without a hitch. It's reliable and
            consistent, which is crucial for maintaining productivity.
          </p>

          <h3>
            Liam Parker <span>Kanban board's user</span>
          </h3>
        </article>
      </section>

      <section className="review review3">
        <article className="img">
          <img src={personSmiling3} alt="" />
        </article>
        <article className="text">
          <p>
            This kanban board website has quickly become my go-to tool for
            managing my tasks efficiently. From the moment I started using it, I
            appreciated its straightforward approach to task management. The
            interface is clean and intuitive, allowing me to create tasks and
            categorize them effortlessly between "In Progress" and "Done"
            columns. What sets this website apart for me is its simplicity. As
            someone who juggles multiple responsibilities, I need a tool that
            helps me stay organized without adding unnecessary complexity. This
            website strikes the perfect balance—it's easy to use yet powerful
            enough to keep my workflow on track. Performance-wise, it's been
            reliable. Whether I'm accessing it on my laptop during work hours or
            quickly checking tasks on my phone, the website loads swiftly and
            updates in real-time. I haven't experienced any glitches or delays,
            which is crucial for staying productive throughout the day.
          </p>

          <h3>
            Emma Williams <span>Kanban board's user</span>
          </h3>
        </article>
      </section>
    </main>
  );
}
