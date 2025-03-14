const NewsGrid = ({ stories }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {stories.map((story) => (
          <article key={story.id} className="rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image src={story.image} alt={story.title} width={400} height={200} className="rounded-t-lg" />
            <h2 className="p-4 text-xl font-bold">{story.title}</h2>
            <p className="p-4 text-gray-600 dark:text-gray-300">{story.summary}</p>
          </article>
        ))}
      </div>
    );
  };