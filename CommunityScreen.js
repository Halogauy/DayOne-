import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Community() {

  // =========================
  // POSTS
  // =========================

  // เริ่มต้นไม่มีโพสต์ตัวอย่าง
  const [posts, setPosts] = useState([]);

  // =========================
  // STATE
  // =========================

  const [activeTab, setActiveTab] = useState('ทั้งหมด');

  const [likedPosts, setLikedPosts] = useState([]);

  const [createModal, setCreateModal] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false);

  const [deletePostId, setDeletePostId] = useState(null);

  const [postTitle, setPostTitle] = useState('');

  const [postContent, setPostContent] = useState('');

  const [selectedCategory, setSelectedCategory] =
    useState('ขอกำลังใจ');

  // =========================
  // LIKE
  // =========================

  const toggleLike = (id) => {
    const alreadyLiked = likedPosts.includes(id);

    setLikedPosts((prev) =>
      alreadyLiked
        ? prev.filter((postId) => postId !== id)
        : [...prev, id]
    );

    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== id) {
          return post;
        }

        return {
          ...post,
          likes: alreadyLiked
            ? Math.max(0, post.likes - 1)
            : post.likes + 1,
        };
      })
    );
  };

  // =========================
  // CREATE POST
  // =========================

  const createPost = () => {

    if (!postTitle.trim()) {
      return;
    }

    if (!postContent.trim()) {
      return;
    }

    const newPost = {
      id: Date.now(),

      name: 'คุณ',

      time: 'เมื่อสักครู่นี้',

      avatar: 'account',

      title: postTitle.trim(),

      content: postContent.trim(),

      likes: 0,

      comments: 0,

      category: selectedCategory,
    };

    // เอาโพสต์ใหม่ขึ้นด้านบน
    setPosts((prev) => [
      newPost,
      ...prev,
    ]);

    // ล้างข้อมูล
    setPostTitle('');
    setPostContent('');
    setSelectedCategory('ขอกำลังใจ');

    // ปิดหน้าสร้างโพสต์
    setCreateModal(false);

    // กลับไปดูทั้งหมด
    setActiveTab('ทั้งหมด');
  };

  // =========================
  // OPEN DELETE
  // =========================

  const openDeleteModal = (id) => {
    setDeletePostId(id);
    setDeleteModal(true);
  };

  // =========================
  // DELETE POST
  // =========================

  const confirmDelete = () => {

    if (deletePostId === null) {
      return;
    }

    // ลบโพสต์
    setPosts((prev) =>
      prev.filter(
        (post) => post.id !== deletePostId
      )
    );

    // เอา Like ของโพสต์นั้นออกด้วย
    setLikedPosts((prev) =>
      prev.filter(
        (id) => id !== deletePostId
      )
    );

    // ปิด Modal
    setDeleteModal(false);

    // ล้าง ID
    setDeletePostId(null);
  };

  // =========================
  // FILTER
  // =========================

  const filteredPosts =
    activeTab === 'ทั้งหมด'
      ? posts
      : posts.filter(
          (post) =>
            post.category === activeTab
        );

  // =========================
  // UI
  // =========================

  return (
    <View style={styles.container}>

      {/* ================= HEADER ================= */}

      <View style={styles.header}>

        <Text style={styles.headerTitle}>
          COMMUNITY
        </Text>

        <TouchableOpacity style={styles.headerButton}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={23}
            color="#222"
          />
        </TouchableOpacity>

      </View>

      {/* ================= INTRO ================= */}

      <View style={styles.intro}>

        <View style={styles.introText}>

          <Text style={styles.introTitle}>
            ชุมชนคนเลิกบุหรี่ไฟฟ้า
          </Text>

          <Text style={styles.introSubtitle}>
            แชร์ประสบการณ์ ให้กำลังใจ และเติบโตไปด้วยกัน
          </Text>

        </View>

        <View style={styles.communityIcon}>

          <MaterialCommunityIcons
            name="account-group"
            size={27}
            color="#596B43"
          />

        </View>

      </View>

      {/* ================= TABS ================= */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabScroll}
        contentContainerStyle={styles.tabContainer}
      >

        {[
          'ทั้งหมด',
          'ขอกำลังใจ',
          'ขอคำแนะนำ',
          'แชร์ประสบการณ์',
        ].map((tab) => (

          <TouchableOpacity
            key={tab}
            onPress={() =>
              setActiveTab(tab)
            }
            style={[
              styles.tab,
              activeTab === tab &&
                styles.activeTab,
            ]}
          >

            <Text
              style={[
                styles.tabText,
                activeTab === tab &&
                  styles.activeTabText,
              ]}
            >
              {tab}
            </Text>

          </TouchableOpacity>

        ))}

      </ScrollView>

      {/* ================= FEED ================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feed}
      >

        {filteredPosts.map((post) => {

          const isLiked =
            likedPosts.includes(post.id);

          return (

            <View
              style={styles.postCard}
              key={post.id}
            >

              {/* USER */}

              <View style={styles.userRow}>

                <View style={styles.avatar}>

                  <MaterialCommunityIcons
                    name="account"
                    size={24}
                    color="#F4F5F0"
                  />

                </View>

                <View style={styles.userInfo}>

                  <Text style={styles.userName}>
                    {post.name}
                  </Text>

                  <View style={styles.timeRow}>

                    <Text style={styles.time}>
                      {post.time}
                    </Text>

                    <Text style={styles.dot}>
                      •
                    </Text>

                    <MaterialCommunityIcons
                      name="earth"
                      size={12}
                      color="#888"
                    />

                  </View>

                </View>

                {/* ลบได้ทุกโพสต์ */}

                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() =>
                    openDeleteModal(post.id)
                  }
                >

                  <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={21}
                    color="#D9535F"
                  />

                </TouchableOpacity>

              </View>

              {/* POST */}

              <Text style={styles.postTitle}>
                {post.title}
              </Text>

              <Text style={styles.postContent}>
                {post.content}
              </Text>

              {/* STATS */}

              <View style={styles.stats}>

                <View style={styles.likeStats}>

                  <View style={styles.likeIcon}>

                    <MaterialCommunityIcons
                      name="heart"
                      size={12}
                      color="#FFFFFF"
                    />

                  </View>

                  <Text style={styles.statsText}>
                    {post.likes}
                  </Text>

                </View>

                <Text style={styles.statsText}>
                  {post.comments} ความคิดเห็น
                </Text>

              </View>

              <View style={styles.divider} />

              {/* ACTIONS */}

              <View style={styles.actionRow}>

                <TouchableOpacity
                  style={styles.action}
                  onPress={() =>
                    toggleLike(post.id)
                  }
                >

                  <MaterialCommunityIcons
                    name={
                      isLiked
                        ? 'heart'
                        : 'heart-outline'
                    }
                    size={21}
                    color={
                      isLiked
                        ? '#E95A67'
                        : '#555'
                    }
                  />

                  <Text
                    style={[
                      styles.actionText,
                      isLiked &&
                        styles.likedText,
                    ]}
                  >
                    ถูกใจ
                  </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.action}>

                  <MaterialCommunityIcons
                    name="comment-outline"
                    size={21}
                    color="#555"
                  />

                  <Text style={styles.actionText}>
                    แสดงความคิดเห็น
                  </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.action}>

                  <MaterialCommunityIcons
                    name="share-outline"
                    size={21}
                    color="#555"
                  />

                  <Text style={styles.actionText}>
                    แชร์
                  </Text>

                </TouchableOpacity>

              </View>

            </View>
          );
        })}

        {/* ================= EMPTY ================= */}

        {filteredPosts.length === 0 && (

          <View style={styles.empty}>

            <View style={styles.emptyIcon}>

              <MaterialCommunityIcons
                name="account-group-outline"
                size={48}
                color="#9CAF7D"
              />

            </View>

            <Text style={styles.emptyTitle}>
              ยังไม่มีโพสต์
            </Text>

            <Text style={styles.emptySubtitle}>
              มาเป็นคนแรกที่แชร์ประสบการณ์กันเถอะ
            </Text>

            <TouchableOpacity
              style={styles.emptyButton}
              onPress={() =>
                setCreateModal(true)
              }
            >

              <MaterialCommunityIcons
                name="plus"
                size={18}
                color="#FFFFFF"
              />

              <Text style={styles.emptyButtonText}>
                สร้างโพสต์แรก
              </Text>

            </TouchableOpacity>

          </View>

        )}

        <View style={styles.bottomSpace} />

      </ScrollView>

      {/* ================= CREATE BUTTON ================= */}

      <TouchableOpacity
        style={styles.createButton}
        activeOpacity={0.8}
        onPress={() =>
          setCreateModal(true)
        }
      >

        <MaterialCommunityIcons
          name="plus"
          size={25}
          color="#FFFFFF"
        />

        <Text style={styles.createText}>
          สร้างโพสต์
        </Text>

      </TouchableOpacity>

      {/* ================================================= */}
      {/* CREATE POST MODAL */}
      {/* ================================================= */}

      <Modal
        visible={createModal}
        transparent
        animationType="slide"
        onRequestClose={() =>
          setCreateModal(false)
        }
      >

        <KeyboardAvoidingView
          style={styles.modalBackground}
          behavior={
            Platform.OS === 'ios'
              ? 'padding'
              : undefined
          }
        >

          <View style={styles.modalCard}>

            {/* HEADER */}

            <View style={styles.modalHeader}>

              <Text style={styles.modalTitle}>
                สร้างโพสต์
              </Text>

              <TouchableOpacity
                onPress={() =>
                  setCreateModal(false)
                }
              >

                <MaterialCommunityIcons
                  name="close"
                  size={25}
                  color="#333"
                />

              </TouchableOpacity>

            </View>

            {/* USER */}

            <View style={styles.modalUser}>

              <View style={styles.modalAvatar}>

                <MaterialCommunityIcons
                  name="account"
                  size={23}
                  color="#F4F5F0"
                />

              </View>

              <View>

                <Text style={styles.modalUserName}>
                  คุณ
                </Text>

                <View style={styles.publicRow}>

                  <MaterialCommunityIcons
                    name="earth"
                    size={12}
                    color="#777"
                  />

                  <Text style={styles.publicText}>
                    ทุกคนสามารถเห็นโพสต์นี้
                  </Text>

                </View>

              </View>

            </View>

            {/* CATEGORY */}

            <Text style={styles.fieldLabel}>
              หมวดหมู่
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={
                styles.modalCategoryContainer
              }
            >

              {[
                'ขอกำลังใจ',
                'ขอคำแนะนำ',
                'แชร์ประสบการณ์',
              ].map((category) => (

                <TouchableOpacity
                  key={category}
                  style={[
                    styles.modalCategory,
                    selectedCategory ===
                      category &&
                      styles.modalCategoryActive,
                  ]}
                  onPress={() =>
                    setSelectedCategory(
                      category
                    )
                  }
                >

                  <Text
                    style={[
                      styles.modalCategoryText,
                      selectedCategory ===
                        category &&
                        styles.modalCategoryTextActive,
                    ]}
                  >
                    {category}
                  </Text>

                </TouchableOpacity>

              ))}

            </ScrollView>

            {/* TITLE */}

            <Text style={styles.fieldLabel}>
              หัวข้อ
            </Text>

            <TextInput
              value={postTitle}
              onChangeText={setPostTitle}
              placeholder="เขียนหัวข้อโพสต์..."
              placeholderTextColor="#999"
              style={styles.titleInput}
              maxLength={100}
            />

            {/* CONTENT */}

            <Text style={styles.fieldLabel}>
              เนื้อหา
            </Text>

            <TextInput
              value={postContent}
              onChangeText={setPostContent}
              placeholder="เล่าประสบการณ์หรือสิ่งที่อยากพูดคุยกับชุมชน..."
              placeholderTextColor="#999"
              style={styles.contentInput}
              multiline
              textAlignVertical="top"
              maxLength={500}
            />

            <Text style={styles.characterCount}>
              {postContent.length}/500
            </Text>

            {/* PUBLISH */}

            <TouchableOpacity
              style={styles.publishButton}
              onPress={createPost}
              activeOpacity={0.8}
            >

              <MaterialCommunityIcons
                name="send"
                size={19}
                color="#FFFFFF"
              />

              <Text style={styles.publishText}>
                เผยแพร่โพสต์
              </Text>

            </TouchableOpacity>

          </View>

        </KeyboardAvoidingView>

      </Modal>

      {/* ================================================= */}
      {/* DELETE CONFIRM MODAL */}
      {/* ================================================= */}

      <Modal
        visible={deleteModal}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setDeleteModal(false)
        }
      >

        <View style={styles.deleteBackground}>

          <View style={styles.deleteCard}>

            {/* ICON */}

            <View style={styles.deleteIcon}>

              <MaterialCommunityIcons
                name="trash-can-outline"
                size={30}
                color="#D9535F"
              />

            </View>

            {/* TITLE */}

            <Text style={styles.deleteTitle}>
              ลบโพสต์
            </Text>

            <Text style={styles.deleteDescription}>
              คุณต้องการลบโพสต์นี้ใช่ไหม?
            </Text>

            <Text style={styles.deleteWarning}>
              เมื่อลบแล้วจะไม่สามารถเรียกคืนโพสต์ได้
            </Text>

            {/* BUTTONS */}

            <View style={styles.deleteActions}>

              <TouchableOpacity
                style={styles.cancelDelete}
                onPress={() => {
                  setDeleteModal(false);
                  setDeletePostId(null);
                }}
              >

                <Text style={styles.cancelDeleteText}>
                  ยกเลิก
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmDelete}
                onPress={confirmDelete}
              >

                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={18}
                  color="#FFFFFF"
                />

                <Text style={styles.confirmDeleteText}>
                  ลบโพสต์
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  /* ================= MAIN ================= */

  container: {
    flex: 1,
    backgroundColor: '#F7FCEF',
  },

  /* ================= HEADER ================= */

  header: {
    height: 58,
    backgroundColor: '#AEC18D',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111',
  },

  headerButton: {
    position: 'absolute',
    right: 15,

    width: 38,
    height: 38,
    borderRadius: 19,

    backgroundColor: '#DCE7C6',

    justifyContent: 'center',
    alignItems: 'center',
  },

  /* ================= INTRO ================= */

  intro: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 17,
    paddingTop: 16,
    paddingBottom: 13,
  },

  introText: {
    flex: 1,
  },

  introTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#222',
  },

  introSubtitle: {
    fontSize: 11,
    color: '#777',
    marginTop: 3,
  },

  communityIcon: {
    width: 45,
    height: 45,
    borderRadius: 23,

    backgroundColor: '#E4EED3',

    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 10,
  },

  /* ================= TABS ================= */

  tabScroll: {
    maxHeight: 43,
  },

  tabContainer: {
    paddingHorizontal: 13,
    paddingBottom: 8,
  },

  tab: {
    height: 32,

    backgroundColor: '#E5EED5',

    borderRadius: 17,

    paddingHorizontal: 15,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 8,
  },

  activeTab: {
    backgroundColor: '#AEC18D',
  },

  tabText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#59614E',
  },

  activeTabText: {
    color: '#111',
    fontWeight: '900',
  },

  /* ================= FEED ================= */

  feed: {
    paddingHorizontal: 10,
    paddingTop: 5,
    flexGrow: 1,
  },

  postCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 13,

    paddingHorizontal: 14,
    paddingTop: 13,
    paddingBottom: 6,

    marginBottom: 10,

    borderWidth: 1,
    borderColor: '#E0E5D6',
  },

  /* ================= USER ================= */

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 39,
    height: 39,

    borderRadius: 20,

    backgroundColor: '#5C6788',

    justifyContent: 'center',
    alignItems: 'center',
  },

  userInfo: {
    flex: 1,
    marginLeft: 9,
  },

  userName: {
    fontSize: 14,
    fontWeight: '900',
    color: '#111',
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },

  time: {
    fontSize: 10,
    color: '#888',
  },

  dot: {
    fontSize: 12,
    color: '#999',
    marginHorizontal: 4,
  },

  deleteButton: {
    width: 38,
    height: 38,

    justifyContent: 'center',
    alignItems: 'center',
  },

  /* ================= POST ================= */

  postTitle: {
    fontSize: 15,
    fontWeight: '900',

    color: '#111',

    marginTop: 12,
    marginBottom: 5,

    lineHeight: 20,
  },

  postContent: {
    fontSize: 13,
    color: '#333',

    lineHeight: 20,

    marginBottom: 10,
  },

  /* ================= STATS ================= */

  stats: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',

    minHeight: 27,
  },

  likeStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  likeIcon: {
    width: 20,
    height: 20,

    borderRadius: 10,

    backgroundColor: '#E95A67',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 5,
  },

  statsText: {
    fontSize: 10,
    color: '#777',
  },

  divider: {
    height: 1,

    backgroundColor: '#ECEDE8',

    marginBottom: 3,
  },

  /* ================= ACTION ================= */

  actionRow: {
    height: 39,

    flexDirection: 'row',
    alignItems: 'center',
  },

  action: {
    flex: 1,

    height: 35,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionText: {
    fontSize: 11,
    fontWeight: '700',

    color: '#666',

    marginLeft: 5,
  },

  likedText: {
    color: '#E95A67',
  },

  /* ================= CREATE ================= */

  createButton: {
    position: 'absolute',

    right: 18,
    bottom: 18,

    height: 48,

    paddingHorizontal: 18,

    borderRadius: 24,

    backgroundColor: '#8DA66D',

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 4,

    shadowOpacity: 0.15,
    shadowRadius: 5,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  createText: {
    color: '#FFFFFF',

    fontSize: 14,
    fontWeight: '900',

    marginLeft: 5,
  },

  bottomSpace: {
    height: 90,
  },

  /* ================= EMPTY ================= */

  empty: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    paddingTop: 70,
  },

  emptyIcon: {
    width: 82,
    height: 82,

    borderRadius: 41,

    backgroundColor: '#E5EED5',

    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyTitle: {
    marginTop: 15,

    fontSize: 17,
    fontWeight: '900',

    color: '#555',
  },

  emptySubtitle: {
    marginTop: 5,

    fontSize: 12,
    color: '#999',

    textAlign: 'center',
  },

  emptyButton: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#8DA66D',

    height: 42,

    paddingHorizontal: 18,

    borderRadius: 21,

    marginTop: 17,
  },

  emptyButtonText: {
    color: '#FFFFFF',

    fontSize: 12,
    fontWeight: '900',

    marginLeft: 5,
  },

  /* ================= CREATE MODAL ================= */

  modalBackground: {
    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.45)',

    justifyContent: 'flex-end',
  },

  modalCard: {
    backgroundColor: '#F7FCEF',

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    paddingHorizontal: 20,
    paddingTop: 17,
    paddingBottom: 25,

    maxHeight: '90%',
  },

  modalHeader: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginBottom: 16,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111',
  },

  modalUser: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 17,
  },

  modalAvatar: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: '#5C6788',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 9,
  },

  modalUserName: {
    fontSize: 14,
    fontWeight: '900',
    color: '#111',
  },

  publicRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 2,
  },

  publicText: {
    fontSize: 10,
    color: '#777',

    marginLeft: 4,
  },

  fieldLabel: {
    fontSize: 13,
    fontWeight: '900',

    color: '#333',

    marginBottom: 7,
  },

  modalCategoryContainer: {
    paddingBottom: 14,
  },

  modalCategory: {
    height: 34,

    backgroundColor: '#E5EED5',

    borderRadius: 17,

    paddingHorizontal: 13,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 7,
  },

  modalCategoryActive: {
    backgroundColor: '#AEC18D',
  },

  modalCategoryText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#59614E',
  },

  modalCategoryTextActive: {
    color: '#111',
    fontWeight: '900',
  },

  titleInput: {
    height: 45,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#D6DDC9',

    borderRadius: 10,

    paddingHorizontal: 13,

    fontSize: 13,
    color: '#222',

    marginBottom: 13,
  },

  contentInput: {
    height: 105,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#D6DDC9',

    borderRadius: 10,

    paddingHorizontal: 13,
    paddingTop: 11,

    fontSize: 13,
    color: '#222',
  },

  characterCount: {
    fontSize: 9,

    color: '#999',

    textAlign: 'right',

    marginTop: 4,
    marginBottom: 12,
  },

  publishButton: {
    height: 48,

    backgroundColor: '#8DA66D',

    borderRadius: 24,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  publishText: {
    color: '#FFFFFF',

    fontSize: 14,
    fontWeight: '900',

    marginLeft: 7,
  },

  /* ================================================= */
  /* DELETE MODAL */
  /* ================================================= */

  deleteBackground: {
    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.50)',

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 30,
  },

  deleteCard: {
    width: '100%',

    backgroundColor: '#FFFFFF',

    borderRadius: 20,

    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 20,

    alignItems: 'center',
  },

  deleteIcon: {
    width: 62,
    height: 62,

    borderRadius: 31,

    backgroundColor: '#FCE8EA',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 13,
  },

  deleteTitle: {
    fontSize: 19,

    fontWeight: '900',

    color: '#222',

    marginBottom: 7,
  },

  deleteDescription: {
    fontSize: 14,

    fontWeight: '700',

    color: '#444',

    textAlign: 'center',
  },

  deleteWarning: {
    fontSize: 11,

    color: '#999',

    textAlign: 'center',

    marginTop: 5,
    marginBottom: 20,
  },

  deleteActions: {
    flexDirection: 'row',

    width: '100%',

    gap: 9,
  },

  cancelDelete: {
    flex: 1,

    height: 44,

    borderRadius: 22,

    backgroundColor: '#E9EEDC',

    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelDeleteText: {
    fontSize: 13,

    fontWeight: '900',

    color: '#596B43',
  },

  confirmDelete: {
    flex: 1,

    height: 44,

    borderRadius: 22,

    backgroundColor: '#D9535F',

    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },

  confirmDeleteText: {
    fontSize: 13,

    fontWeight: '900',

    color: '#FFFFFF',

    marginLeft: 5,
  },

});
