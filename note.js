useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
  
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]); // Повторно подписаться, только если props.friend.id изменился